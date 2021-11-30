import MockAdapter from 'axios-mock-adapter'
import { $http } from 'boot/axios'
import { $sound } from '@/store/services/sound'
import { boot } from 'quasar/wrappers'
import { Dialog, Platform  } from 'quasar'

var orderWaitings = [];
var statuses = ['WAIT','DONE']
var order = {
      "id": 1,
      "created": "2021-10-24T21:15:22.659384+06:00",
      "modified": "2021-10-24T21:19:01.670201+06:00",
      "locationCode": "DEMO",
      "cellCode": "A-01",
      "trackingNumber": "1230982192",
      "labelNumber": "1230982192",
      "status": "PICKING_COMPLETED",
      "waiting": false,
      "history": [
          {
              "index": 1,
              "status": "PICKING_COMPLETED",
              "date": "2021-10-24T21:15:22.669172+06:00",
              "success": true
          },
          {
              "index": 2,
              "status": "PICKING_COMPLETED",
              "date": "2021-10-24T21:16:20.40564+06:00",
              "success": true
          },
          {
              "index": 3,
              "status": "PACKING_COMPLETED",
              "date": "2021-10-24T21:17:00.51048+06:00",
              "success": true
          },
          {
              "index": 4,
              "status": "PACKING_COMPLETED",
              "date": "2021-10-24T21:17:07.065762+06:00",
              "success": true
          },
          {
              "index": 5,
              "status": "PACKING_COMPLETED",
              "date": "2021-10-24T21:17:15.408407+06:00",
              "success": true
          },
          {
              "index": 6,
              "status": "PACKING_COMPLETED",
              "date": "2021-10-24T21:18:03.590257+06:00",
              "success": true
          },
          {
              "index": 7,
              "status": "PACKING_COMPLETED",
              "date": "2021-10-24T21:18:31.938992+06:00",
              "success": true
          },
      ]
  };

const error = {
  "code": "CELL_NOT_FOUND",
  "message": "The CELL-DEV-06 cell has already been announced. It cannot be reassigned.",
  "meta": {
    "NEW_CELL": "CELL-DEV-03",
    "CURRENT_CELL": "CELL-DEV-02"
  }
}

const error_invalid_order = {
  "code": "INVALID_ORDER",
  "message": "Order number is out of range please scan again.",
}

var cellList = [{"code":"A-01","status":"ACTIVE","data":null},{"code":"A-02","status":"ACTIVE","data":null},{"code":"A-03","status":"ACTIVE","data":null}];

/* /\/users\/\d+/ */
const $mock = new MockAdapter($http,{delayResponse:500}) 
.onAny(/\/locations\/\w+\/cells$/).reply((cfg)=>{
  return [200,cellList];
})
.onAny('/locations').reply((cfg)=>{
  return [200,[
    'DEV','DUBAI','ABUDABI'
  ]];
})
.onGet(/\/locations\/\w+\/orders$/).reply((cfg)=>{
  return [200,[order]];
})
.onDelete(/\/locations\/\w+\/orders\/\w+/).reply((cfg)=>{
  return [200,'ok'];
})
.onPost(/\/locations\/\w+\/orders$/).reply((cfg)=>{
  // console.debug("Mock picking-completed",cfg);
  var data = JSON.parse(cfg.data);
  var err = (( Math.floor(Math.random()*10) < 5 ) ? error : error_invalid_order);
  var isOk = ( Math.floor(Math.random()*10) < 9 )

  if(data.trackingNumber && data.trackingNumber.length < 2) isOk = false;
  if(data.trackingNumber && data.trackingNumber == '5555'){ isOk = false;  err = error_invalid_order; }

  order["created"] = new Date(),
  order["modified"] = new Date(),
  order["locationCode"] = "demo";

  order["status"] = data.status;
  

  // if(data.status == ''){
  //   order['status'] = 'PACKING_COMPLETED'
  // }

  if(data['status'] == 'RIDER_CHECKEDOUT'){
    localStorage.removeItem('Tracking Number');
    localStorage.removeItem('Label Number');
    localStorage.removeItem('Cell Number');
  }

  

  order.waiting = (Math.floor(Math.random()*10)>5)

  if(data.cellCode) { order["cellCode"] = data.cellCode }
  if(data.trackingNumber) { order["trackingNumber"] = data.trackingNumber; }
  if(data.labelNumber) { order["labelNumber"] = data.labelNumber; }

  console.debug('Mock /locations/demo/orders',order);
  return [isOk?200:400,isOk?order:err];
})
// .onAny(/\/locations\/demo\/orders\/\d+\/picking-completed\?trackingNumber=\d+/).reply((cfg)=>{
//   // console.debug("Mock picking-completed",cfg);
//   var data = JSON.parse(cfg.data);
//   console.debug(data.trackingNumber);
//   return [200,{"result": "Picking Done with Tracking Number " + data.trackingNumber}];
// })
// .onAny(/\/locations\/demo\/orders\/\d+\/bagging-completed\?cell=\d+?/).reply((cfg)=>{
//   return [200,{"result": "Bagging Done"}];
// })
// .onAny(/\/locations\/demo\/orders\/check-in\?trackingNumber=\d+?/).reply((cfg)=>{
//   var data = JSON.parse(cfg.data);
//   console.debug(data.trackingNumber);
//   return [200,data];
// })
// .onAny(/\/locations\/demo\/orders\/\d+\/check-out/).reply((cfg)=>{
//   return [200,{"result": "Checking Out Done"}];
// })
.onAny(/\/locations\/\w+\/orders-waiting/).reply((cfg)=>{
  var o = Object.assign({},order);
  o.created = new Date();
  o.id = Math.ceil(Math.random()*100);
  o.status = statuses[Math.ceil(Math.random()*statuses.length)-1];
  o.status_dash = statuses[Math.ceil(Math.random()*statuses.length)-1];

  o.waiting = ( o.status_dash == 'WAIT')

  o.cellCode = 'A-0'+Math.floor(Math.random()*9+1)
  o.trackingNumber = Math.ceil(Math.random()*1000000000);

  if(o.waiting) o.cellCode = null

  if(Math.random()*10>=5) 
    orderWaitings.unshift(o);
  else if(orderWaitings.length > 0) {
    // console.debug('removing');
    orderWaitings.splice(1,1);
  }
  return [200,orderWaitings];
}).onAny().passThrough();

// .onAny().reply((cfg)=>{

//   // if(cfg.params.techindex == '000000') return [200,{"result": "error","resultInfo": "demo:techindex not found"}];
//   // var req = JSON.parse(cfg.data);
//   var req = cfg.params;
//   console.debug("Mock any",req);

//   return [500,{error:"DEMO:Mock no rule found"}]
// })

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

var mockProps =  { label:'Label Number',length:9,prefix:'C'};

export default boot(({ app, store }) => {

  // Save a reference to the mock adapter so that we can later reuse it
  var mockAdapter = $http.defaults.adapter;

  store.watch(() => store.getters.ui.mock,(v)=>{
    if(v) {
      console.debug('--> demoMode mock enabled',v);
      $http.defaults.adapter = mockAdapter;
      setBodyClass('mock',true);
    } else {
      console.debug('--> demoMode mock disabled',v);
      $http.defaults.adapter = null;
      setBodyClass('mock',false);     
    }
  },{ immediate: true })


  if(!Platform.is.cordova) {
    app.config.globalProperties.$bus.$on('props',(p)=>{
      mockProps.label = p.label;
      mockProps.length = p.length;
      mockProps.prefix = p.prefix;
    })
  }
  

})

function setBodyClass(name,value){
  var body = document.getElementsByTagName('body')[0];
  value ? body.classList.add(name) : body.classList.remove(name) ;

}



console.debug('useQuasar.Platform',Platform.is);


// Simulating cordova

if(!Platform.is.cordova) {

  window.cordova = { 
    plugins: { 
      barcodeScanner: {
        scan: function(result,error,cfg){
          var data = scanMockValue('barcode');
          mockCameraUI(result,error,data,cfg);
        }
      },
      ocr : {
        scan : function(result,error,cfg){
          var data = {
            text:scanMockValue('ocr'),
            raw:'989079909 351 PM 583071708 OD 7 Days Chocolate Croissant 55 Gm AED 1.90 Almarai Milk Premium Mango 250 M o/n AED 2.65 Almarai Milk Premium Strawberry 250 MI 0/2 AED 2.60'
          };
          cfg.type = 'ocr'
          mockCameraUI(result,error,data,cfg);
        }
      },
      camera: {
        list: function(result,error){
          let mockList = [
            {
                address: "18:04:ED:6B:13:D4",
                name: "Back camera"
            },
            {
                address: "18:04:ED:6B:13:E5",
                name: "Front Camera"
            },
            {
              address: "18:04:ED:6B:13:E5",
              name: "USB Camera"
            }
          ];
          console.debug('mocking cordova cameraList',mockList);
          window.setTimeout(()=>{
            result(mockList);
          },100);
        },

      },
      btprinter: {
        printZPL: function(address,data,result,error){
          console.debug('mocking cordova print',address,data);
          window.setTimeout(()=>{
            window.print();
            result();
          },500);
        },
        find: function(result,error){
          let mockList = [
            {
                address: "18:04:ED:6B:13:D4",
                name: "XXRBJ200701857"
            },
            {
                address: "18:04:ED:6B:13:E5",
                name: "Bluetooth Printer"
            }
          ];
          console.debug('mocking cordova printList',mockList);
          window.setTimeout(()=>{
            result(mockList);
          },500);
        },

      },
    }
  }
};


function mockCameraUI(result,error,data,cfg){
  let seconds = 1
  // console.debug('mockCamera',data);

  // if(cfg.type != 'ocr'){
  //   data = cfg.prefix + data;
  // }

  const timer = setInterval(() => {
      seconds--

      if (seconds == 0) {
        dialog.update({
          message: `Scanned code ${data && data.text?data.text:data} <code>${data.raw?''+data.raw+'</code>':''} `
        });
        $sound.scaned();
        setTimeout(dialog.hide,1000);
      }
    }, 1000)

  const dialog = Dialog.create({
      title: `${mockProps.label?mockProps.label:''} ${cfg.type||'barcode'} scanner`,
      message: 'Scanning ...',
      html: true
  }).onDismiss(()=>{
    clearInterval(timer)
    result(data);
    mockProps.label = null;
  });

}

function scanMockValue(type){
  
  var name = mockProps.label;
  var length = mockProps.length;
  var prefix = mockProps.prefix

  if(!name) {
    if(type == 'ocr') {
      name = 'Tracking Number';
      length = 9;
    } else {
      if(Math.ceil(Math.random()*10)>5){
        name = 'Label Number'
        prefix = 'L';
        length = 9;
      } else {
        name = 'Cell Number';
      }
    }
  }

  
  
  
  var data = localStorage.getItem(name);

  console.log('mockProps',name,length,prefix, data);

  if(!data){
    console.log('Mocking',name);

    if(name == 'Cell Number'){
      length = 2;
      prefix = 'CA'
    }
      data = (prefix?prefix:'') + String(Math.ceil(Math.random()*(length?Math.pow(10,length):10000)))
      console.log('data',data, String(Math.ceil(Math.random()*(length?Math.pow(10,length):10000))));
      localStorage.setItem(name,data);

    //  'Patch'
    if(name == 'Tracking Number') localStorage.setItem('Label Number','L'+data);
  }

  return data;
} 


export { $mock }

