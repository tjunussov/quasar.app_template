"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[189],{7581:(e,r,t)=>{t.d(r,{W:()=>c});var a=t(5474),n=t(6417);function o(e){const r=e&&e.response&&e.response&&e.response.data&&e.response.data.type&&i18nErrors[e.response.data.type]?i18nErrors[e.response.data.type]:"Произошла ошибка";throw console.error(e.response?e.response:e),n.Z.create({type:"negative",message:r}),e}const s={location:"demo",pick(e,r){return a.$http.put(`/locations/${this.location}/orders/${e}/picking-completed?trackingNumber=${r}`,{labelNumber:e,trackingNumber:r}).catch((e=>{o(e)}))},pack(e,r){return a.$http.put(`/locations/${this.location}/orders/${e}/bagging-completed?cell=${r}`,{labelNumber:e,cell:r}).catch((e=>{o(e)}))},riderCheckIn(e){return a.$http.put(`/locations/${this.location}/orders/check-in?trackingNumber=${e}`,{trackingNumber:e}).catch((e=>{o(e)}))},ride(e){return a.$http.put(`/locations/${this.location}/orders/${e}/check-out`,{labelNumber:e}).catch((e=>{o(e)}))},dashboard(){return a.$http.put(`/locations/${this.location}/dashboard`).catch((e=>{o(e)}))}},c=s},6189:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var a=t(3673);const n={class:"full-width"},o=(0,a.Uk)("Check In"),s=(0,a.Uk)("Ride");function c(e,r,t,c,i,l){const d=(0,a.up)("r-btn"),u=(0,a.up)("q-input"),p=(0,a.up)("q-card-section"),m=(0,a.up)("q-card-actions"),h=(0,a.up)("r-card"),k=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(k,{class:"q-pa-lg flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(h,{class:"q-mt-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"q-pt-none q-gutter-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{label:"Order ID",onDblclick:r[0]||(r[0]=r=>e.orderNum="583039600"),modelValue:e.orderNum,"onUpdate:modelValue":r[1]||(r[1]=r=>e.orderNum=r),rules:[e=>e.length>=9||"Please use minimum 9 characters"]},{append:(0,a.w5)((()=>[(0,a.Wm)(d,{icon:"camera_alt",color:"grey",onClick:e.scan},null,8,["onClick"])])),_:1},8,["modelValue","rules"])])),_:1}),(0,a.Wm)(m,{vertical:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{onClick:e.riderCheckIn,disabled:!e.orderNum},{default:(0,a.w5)((()=>[o])),_:1},8,["onClick","disabled"]),(0,a.Wm)(d,{onClick:e.ride,disabled:!e.orderNum},{default:(0,a.w5)((()=>[s])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])])),_:1})}var i=t(1959),l=t(8825),d=t(7581),u=t(8625),p=t.n(u),m=new(p());const h=(0,a.aZ)({name:"Ride",components:{},setup(){const e=(0,l.Z)(),r=(0,i.iH)(""),t=(0,i.qj)({id:"583039599",key:"#3918",address:"Talabat Mart, Port Saed",date:"07-05-2021 15:55:43"});return{orderNum:r,order:t,ride(){t.id=r.value,d.W.ride(t.id).then((r=>{console.debug("$api.ride",t.id,"resp->",r.data),e.notify({type:"info",color:"primary",message:r.data.result})}))},riderCheckIn(){t.id=r.value,d.W.riderCheckIn(t.id).then((r=>{console.debug("$api.riderCheckIn",t.id,"resp->",r.data),e.notify({type:"info",color:"primary",message:r.data.result})}))},scan(){e.dialog({title:"OCR Scaner",message:"Please scan screen"}).onOk((()=>{r.value="583039599"}))},print(){console.log("Printing"),e.notify({spinner:!0,timeout:1e3,position:"top",message:"Printing Label",color:"primary"})},encode(e){return m.encode(e)}}}});var k=t(4379),g=t(5589),b=t(1206),f=t(5869),$=t(9367),C=t(7518),y=t.n(C);h.render=c;const w=h;y()(h,"components",{QPage:k.Z,QCardSection:g.Z,QInput:b.Z,QSeparator:f.Z,QCardActions:$.Z})}}]);