import MockAdapter from 'axios-mock-adapter'
import { $http } from 'boot/axios'
import { boot } from 'quasar/wrappers'

var order = {
      "id": 1,
      "created": "2021-10-24T21:15:22.659384+06:00",
      "modified": "2021-10-24T21:19:01.670201+06:00",
      "locationCode": "DEMO",
      "cellCode": "CELL-DEV-01",
      "trackingNumber": "1230982192",
      "labelNumber": "1230982192",
      "status": "COMPLETED",
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
          {
              "index": 8,
              "status": "COMPLETED",
              "date": "2021-10-24T21:19:01.646695+06:00",
              "success": true
          },
          {
              "index": 9,
              "status": "COMPLETED",
              "date": "2021-10-24T21:21:20.635516+06:00",
              "success": true
          }
      ]
  };
/* /\/users\/\d+/ */
const $mock = new MockAdapter($http,{delayResponse:500}) 
.onAny('/locations/demo/orders').reply((cfg)=>{
  // console.debug("Mock picking-completed",cfg);
  var data = JSON.parse(cfg.data);

  order["created"] = new Date(),
  order["modified"] = new Date(),
  order["locationCode"] = "demo",
  order["cellCode"] = data.cellCode,
  order["trackingNumber"] = data.trackingNumber,
  order["labelNumber"] = data.labelNumber,

  console.debug('Mock /locations/demo/orders',data);
  return [200,order];
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
.onAny('/locations/demo/orders-waiting').reply((cfg)=>{
  return [200,[
    {
      "id": 1,
      "created": "2021-10-24T21:15:22.659384+06:00",
      "modified": "2021-10-24T21:21:20.64168+06:00",
      "locationCode": "DEMO",
      "cellCode": "CELL-DEV-01",
      "trackingNumber": "1230982192",
      "labelNumber": "1230982192",
      "referenceNumber":"3243",
      "status": "COMPLETED",
      "waiting": true,
      "history": null
    },{
      "id": 1,
      "created": "2021-10-24T21:15:22.659384+06:00",
      "modified": "2021-10-24T21:21:20.64168+06:00",
      "locationCode": "DEMO",
      "cellCode": "CELL-DEV-03",
      "trackingNumber": "1230982182",
      "labelNumber": "1230982102",
      "referenceNumber":"1231",
      "status": "COMPLETED",
      "waiting": true,
      "history": null
    }
  ]];
}).onAny().passThrough();

// .onAny().reply((cfg)=>{

//   // if(cfg.params.techindex == '000000') return [200,{"result": "error","resultInfo": "demo:techindex not found"}];
//   // var req = JSON.parse(cfg.data);
//   var req = cfg.params;
//   console.debug("Mock any",req);

//   return [500,{error:"DEMO:Mock no rule found"}]
// })

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { $mock }

