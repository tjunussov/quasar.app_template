import { $http } from 'boot/axios'
import { Notify } from 'quasar'

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
// 1. PICKER: b) Scan Order with OCR scanner and scan Label with Barcode Scanner System: Create new Order in DB with “Picking completed” status:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
//   - {trackingNumber} - Scanned from Picker’s app Order number (OCR)
// PUT /locations/{location}/orders/{labelNumber}/picking-completed?trackingNumber={trackingNumber}

    pick(labelNumber,trackingNumber) {
        return $http.put(`/locations/${this.location}/orders/${labelNumber}/picking-completed?trackingNumber=${trackingNumber}`).catch((error) => { handleError(error) })
    },

// 2. PACKER: Drop Order into Cell
// System: Set Order “bagging completed” status:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
//   - {cell} - Scanned Cell number (barcode)
// PUT /locations/{location}/orders/{labelNumber}/bagging-completed?cell={cell}

    pack(labelNumber,cell) {
        return $http.put(`/locations/${this.location}/orders/${labelNumber}/bagging-completed?cell=${cell}`).catch((error) => { handleError(error) })
    },


// 3. RIDER: Check-in at Location
// System: Check Order status:
//   - {location} - Unique store code
//   - {trackingNumber} - Scanned from Rider’s app Order number (OCR)
// GET /locations/{location}/orders/check-in?trackingNumber={trackingNumber}

    riderCheckIn(trackingNumber) {
        return $http.put(`/locations/${this.location}/orders/check-in?trackingNumber=${trackingNumber}`).catch((error) => { handleError(error) })
    },

// 4. RIDER: Pick and Check-out
// System: Change Order status to “Pickup confirmed”:
//   - {location} - Unique store code
//   - {labelNumber} - Scanned Label number (barcode)
// PUT /locations/{location}/orders/{labelNumber}/check-out

    ride(labelNumber) {
        return $http.put(`/locations/${this.location}/orders/${labelNumber}/check-out`).catch((error) => { handleError(error) })
    },

    dashboard() {
        return $http.put(`/locations/${this.location}/dashboard`).catch((error) => { handleError(error) })
    },

}

const $api = process.env.CORDOVA === 'true' ? instoreApi : instoreApi

export { $api }
export default $api