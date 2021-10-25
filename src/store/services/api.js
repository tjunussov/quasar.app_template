import { $http } from 'boot/axios'
import { Notify } from 'quasar'
import { $sound } from '../../store/services/sound'

function handleError(error) {
    const errorMessage = error
                        && error.response
                        && error.response
                        && error.response.data
                        && error.response.data.type
                        && i18nErrors[error.response.data.type]
      ? i18nErrors[error.response.data.type]
      : 'Произошла ошибка'
    console.error(error.response ? error.response : error)

    Notify.create({type: 'negative',message: errorMessage})

    throw error
}

  
const instoreApi = {
    location: 'demo',

    // POST /locations/{location}/orders:
    // {
    //     "cellCode": “ABC7778”, // nullable
    //     "trackingNumber": "102899287394230",
    //     "labelNumber": "1029830192",
    //     "status": "PICKING_COMPLETED"
    // }
    track(param) {
      console.log('location',this.location);
      
      return $http.post(`/locations/${this.location}/orders`,param)
        .then((resp)=>resultBuilder(param,resp))
        .catch((error) => { handleError(error) })
    },
    pick(labelNumber,trackingNumber) {
      // if labelNumber undefined then use trackingNumber
      return this.track({labelNumber:labelNumber||trackingNumber,trackingNumber,status:'PICKING_COMPLETED'});
    },
    pack(labelNumber,cellCode) {
      // if cell code not specified then is is Packing Started
      if(cellCode)
        return this.track({labelNumber,cellCode,status:'PACKING_COMPLETED'});
      else 
        return this.track({labelNumber,status:'PACKING_STARTED'});
    },
    ride(labelNumber) {
      return this.track({labelNumber,status:'RIDER_CHECKEDOUT'});
    },
    riderCheckIn(trackingNumber) {
      return this.track({trackingNumber,status:'RIDER_CHECKEDIN'});
    },
    

// 1. PICKER: b) Scan Order with OCR scanner and scan Label with Barcode Scanner System: Create new Order in DB with “Picking completed” status:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
//   - {trackingNumber} - Scanned from Picker’s app Order number (OCR)
// PUT /locations/{location}/orders/{labelNumber}/picking-completed?trackingNumber={trackingNumber}

    // pick(labelNumber,trackingNumber) {
    //     this.track({labelNumber,trackingNumber,status:'PICKING_COMPLETED'});
    //     // return $http.put(`/locations/${this.location}/orders/${labelNumber}/picking-completed?trackingNumber=${trackingNumber}`,{labelNumber,trackingNumber}).catch((error) => { handleError(error) })
    // },

// 2. PACKER: Drop Order into Cell
// System: Set Order “bagging completed” status:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
//   - {cell} - Scanned Cell number (barcode)
// PUT /locations/{location}/orders/{labelNumber}/bagging-completed?cell={cell}

    // pack(labelNumber,cell) {
    //     return $http.put(`/locations/${this.location}/orders/${labelNumber}/bagging-completed?cell=${cell}`,{labelNumber,cell}).catch((error) => { handleError(error) })
    // },


// 3. RIDER: Check-in at Location
// System: Check Order status:
//   - {location} - Unique store code
//   - {trackingNumber} - Scanned from Rider’s app Order number (OCR)
// GET /locations/{location}/orders/check-in?trackingNumber={trackingNumber}

    // riderCheckIn(trackingNumber) {
    //     return $http.put(`/locations/${this.location}/orders/check-in?trackingNumber=${trackingNumber}`,{trackingNumber}).catch((error) => { handleError(error) })
    // },

// 4. RIDER: Pick and Check-out
// System: Change Order status to “Pickup confirmed”:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
// PUT /locations/{location}/orders/{labelNumber}/check-out

    // ride(labelNumber) {
    //     return $http.put(`/locations/${this.location}/orders/${labelNumber}/check-out`,{labelNumber}).catch((error) => { handleError(error) })
    // },


//     Request:

// GET /rest/locations/DEV/orders-waiting HTTP/1.1
// Host: localhost:8180
// Cookie: JSESSIONID=21346D56943E00E7B8D5389248A9FD9
// F

// Response:


// [
//     {
//         "id": 1,
//         "created": "2021-10-24T21:15:22.659384+06:00",
//         "modified": "2021-10-24T21:21:20.64168+06:00",
//         "locationCode": "DEV",
//         "cellCode": "CELL-DEV-01",
//         "trackingNumber": "1230982192",
//         "labelNumber": "1230982192",
//         "status": "COMPLETED",
//         "waiting": false,
//         "history": null
//     }
// ]

    dashboard() {
        return $http.get(`/locations/${this.location}/orders-waiting`).catch((error) => { handleError(error) })
    },

}

const $api = process.env.CORDOVA === 'true' ? instoreApi : instoreApi


function resultBuilder(param,resp){
  $sound.track();

  resp = resp.data;
  resp.result = "Order" + 
  (resp.trackingNumber?' Tracking '+resp.trackingNumber:'') + 
  (resp.cellCode?' Cell '+resp.cellCode:'') + 
  (resp.labelNumber?' Label '+resp.labelNumber:'') + 
  (resp.status?' Status '+resp.status:'');

  console.debug('$api.track',param,resp.data);
  Notify.create({ type: 'info',color: 'green',message: resp.result });

  return resp;
}

export { $api }
export default $api