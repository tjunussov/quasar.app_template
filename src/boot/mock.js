import MockAdapter from 'axios-mock-adapter'
import { api } from 'boot/axios'
import { boot } from 'quasar/wrappers'

// export default boot(({ app }) => {
//     app.config.globalProperties.$urlParams = urlParams
// })

var plan = {
    "result": "success",
};

export const mock = new MockAdapter(api,{delayResponse:50}) 

.onGet('authorize').reply((cfg)=>{

    console.log('authorize',cfg.params);

    if(cfg.params.login == 'test.ast17.sc1')
        return [200,{"result": "success","name": "demo:Мырзанова Гульмира"}];
    else if(cfg.params.login == 'test')
        return [200,{"result": "success","name": "demo:Азамат Алимбаев"}];
    else if(cfg.params.login == 'demo')
        return [200,{"result": "success","name": "demo:Demo Demoаев"}];
    else
        return [200,{"result": "error","resultInfo": "demo:user by login not found"}];
})
.onGet('getRPO').reply((cfg)=>{
    if(cfg.params.techindex == '000000') return [200,{"result": "error","resultInfo": "demo:techindex not found"}];
    return [200,barcodes];
})
.onAny('findBagIndex').reply(async (cfg)=>{

  var req = cfg.params;
  
  var p = Math.ceil(Math.random()*10) < 5 ? (barcodes.mails.findIndex((k)=> k == req.barcode )%plan.parentPostIndexes.length) : 0;
  if(p<0) p = Math.floor(plan.parentPostIndexes.length * Math.random())

  console.debug('findBagIndex',req, p);

  // return [200,{"result":"error","resultInfo":"TEST TEST "}];

  var resp = 
    {
        "result": "success",
        "parentPostIndex": plan.parentPostIndexes[p].techindex,
        "postIndex": Math.ceil(Math.random()*10000),
    }

  if((Math.random()*100) < 70)
    return [200,resp];
  else {
    if((Math.random()*100) < 70)
        return [200,{
            "result":Math.ceil(Math.random()*10)>5?"error":"warning",
            "resultInfo":"DEMO:Отправление "+req.barcode+" не относится к сортплану!",
            "weight":Math.ceil(Math.random()*1000),
            "typeName": "Письмо РК",
        }]
    else
        return [200,{result:"error",resultInfo:"DEMO:Отправление "+req.barcode+" не найдено!"}]
  }

})
.onAny('formBagByPacklist').reply((cfg)=>{
  
  var req = JSON.parse(cfg.data);

  console.debug('formBagByPacklist',req);

  // return [200,{"result":"error","resultInfo":"Общий вес не введён!"}];

  return [200,
  {
    "result": "success",
    "labelListNo": "G2020"+Math.ceil(Math.random()*100000),
    "actualWeight": req.totalWeight,
    "workerName": req.login,
    "date": new Date(),
    "count": req.packetList.length,
}]}
)
.onAny().reply((cfg)=>{

  var req = cfg.params;
  console.debug("Mock any",req);

  return [500,{error:"DEMO:Mock no rule found"}]

})

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

