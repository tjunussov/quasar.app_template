"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[539],{3803:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});var t=a(3673);const r=(0,t.Uk)("Ride"),n={class:"q-gutter-y-md full-width"},u=(0,t.Uk)("Check In "),c=(0,t.Uk)("Ride");function i(e,l,a,i,d,m){const o=(0,t.up)("InputScan"),s=(0,t.up)("q-card-section"),b=(0,t.up)("r-btn"),h=(0,t.up)("q-card-actions"),k=(0,t.up)("r-card"),p=(0,t.up)("q-page"),g=(0,t.up)("layout");return(0,t.wg)(),(0,t.j4)(g,{class:"max-width"},{header:(0,t.w5)((()=>[r])),default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"q-pa-lg flex flex-center"},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{label:"Tracking Number",type:"ocr",extract:"ocr_rider",modelValue:e.trackingNumber,"onUpdate:modelValue":l[0]||(l[0]=l=>e.trackingNumber=l),length:"9",onData:e.multiData},null,8,["modelValue","onData"])])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{onClick:e.riderCheckIn,"text-color":"primary",outline:"",disabled:!e.trackingNumber},{default:(0,t.w5)((()=>[u])),_:1},8,["onClick","disabled"])])),_:1})])),_:1}),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{label:"Label Number",type:"barcode",prefix:"L",modelValue:e.labelNumber,"onUpdate:modelValue":l[1]||(l[1]=l=>e.labelNumber=l),length:"4"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,{onClick:e.ride,disabled:!e.labelNumber},{default:(0,t.w5)((()=>[c])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])])),_:1})])),_:1})}var d=a(6918),m=a(4808),o=a(7581),s=a(499);const b=(0,t.aZ)({name:"Ride",components:{layout:m.Z,InputScan:d.Z},data(){return{labelNumber:null,trackingNumber:null,raw:null}},methods:{riderCheckIn(){o.W.riderCheckIn(this.trackingNumber,this.raw).then((e=>{this.clear(),console.log("resp",e),e.waiting||s.Z.create({title:`${e.trackingNumber} packing done!`,message:`Please pick your box from <h4>${e.cellCode}</h4>`,html:!0})}))},multiData(e){this.raw=e.raw},ride(){o.W.ride(this.labelNumber).then((e=>{this.clear()}))},clear(){this.labelNumber=null,this.trackingNumber=null,localStorage.removeItem("Tracking Number"),localStorage.removeItem("Label Number")}}});var h=a(4379),k=a(5589),p=a(9367),g=a(7518),w=a.n(g);b.render=i;const f=b;w()(b,"components",{QPage:h.Z,QCardSection:k.Z,QCardActions:p.Z})}}]);