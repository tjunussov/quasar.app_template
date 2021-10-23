import MockAdapter from 'axios-mock-adapter'
import { $http } from 'boot/axios'
import { boot } from 'quasar/wrappers'

var plan = {
    "result": "success",
};

/* /\/users\/\d+/ */
const $mock = new MockAdapter($http,{delayResponse:500}) 
.onAny(/\/locations\/demo\/orders\/\d+\/picking-completed\?trackingNumber=\d+/).reply((cfg)=>{
  // console.debug("Mock picking-completed",cfg);
  var data = JSON.parse(cfg.data);
  console.debug(data.trackingNumber);
  return [200,{"result": "Picking Done with Tracking Number " + data.trackingNumber}];
})
.onAny(/\/locations\/demo\/orders\/\d+\/bagging-completed\?cell=\d+?/).reply((cfg)=>{
  return [200,{"result": "Bagging Done"}];
})
.onAny(/\/locations\/demo\/orders\/check-in\?trackingNumber=\d+?/).reply((cfg)=>{
  var data = JSON.parse(cfg.data);
  console.debug(data.trackingNumber);
  return [200,{"result": "Checking In Done with Tracking Number = " + data.trackingNumber}];
})
.onAny(/\/locations\/demo\/orders\/\d+\/check-out/).reply((cfg)=>{
  return [200,{"result": "Checking Out Done"}];
})
.onAny('/locations/demo/dashboard').reply((cfg)=>{
  return [200,{"result": "Dashboard"}];
})
.onAny().reply((cfg)=>{

  // if(cfg.params.techindex == '000000') return [200,{"result": "error","resultInfo": "demo:techindex not found"}];
  // var req = JSON.parse(cfg.data);
  var req = cfg.params;
  console.debug("Mock any",req);

  return [500,{error:"DEMO:Mock no rule found"}]
})

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { $mock }

