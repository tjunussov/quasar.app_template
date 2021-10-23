"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[211],{7581:(e,t,a)=>{a.d(t,{W:()=>c});var r=a(5474),l=a(6417);function n(e){const t=e&&e.response&&e.response&&e.response.data&&e.response.data.type&&i18nErrors[e.response.data.type]?i18nErrors[e.response.data.type]:"Произошла ошибка";throw console.error(e.response?e.response:e),l.Z.create({type:"negative",message:t}),e}const o={location:"demo",pick(e,t){return r.$http.put(`/locations/${this.location}/orders/${e}/picking-completed?trackingNumber=${t}`,{labelNumber:e,trackingNumber:t}).catch((e=>{n(e)}))},pack(e,t){return r.$http.put(`/locations/${this.location}/orders/${e}/bagging-completed?cell=${t}`,{labelNumber:e,cell:t}).catch((e=>{n(e)}))},riderCheckIn(e){return r.$http.put(`/locations/${this.location}/orders/check-in?trackingNumber=${e}`,{trackingNumber:e}).catch((e=>{n(e)}))},ride(e){return r.$http.put(`/locations/${this.location}/orders/${e}/check-out`,{labelNumber:e}).catch((e=>{n(e)}))},dashboard(){return r.$http.put(`/locations/${this.location}/dashboard`).catch((e=>{n(e)}))}},c=o},9211:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var r=a(3673),l=a(2323);const n={class:"q-gutter-y-md full-width"},o=(0,r.Uk)("Pick"),c={class:"col ellipsis"},s={class:"col-auto text-caption"},i={class:"barcode"},u={class:"text-h5 text-weight-bold"},d=(0,r.Uk)("Print");function m(e,t,a,m,p,b){const k=(0,r.up)("r-btn"),g=(0,r.up)("q-input"),h=(0,r.up)("q-card-section"),N=(0,r.up)("q-card-actions"),w=(0,r.up)("r-card"),f=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(f,{class:"q-pa-lg flex flex-center"},{default:(0,r.w5)((()=>[(0,r._)("div",n,[(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"q-pt-none q-gutter-md"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{label:"Label No",onDblclick:t[0]||(t[0]=t=>e.labelNumber="583039600"),modelValue:e.labelNumber,"onUpdate:modelValue":t[1]||(t[1]=t=>e.labelNumber=t),rules:[e=>e.length>=9||"Please use minimum 9 characters"]},{append:(0,r.w5)((()=>[(0,r.Wm)(k,{icon:"camera_alt",color:"grey",onClick:e.scan},null,8,["onClick"])])),_:1},8,["modelValue","rules"]),(0,r.Wm)(g,{label:"Tracking No",onDblclick:t[2]||(t[2]=t=>e.trackingNumber="#3918"),modelValue:e.trackingNumber,"onUpdate:modelValue":t[3]||(t[3]=t=>e.trackingNumber=t),rules:[e=>e.length>=4||"Please use minimum 4 characters"]},null,8,["modelValue","rules"])])),_:1}),(0,r.Wm)(N,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k,{onClick:e.pick,disabled:!e.labelNumber},{default:(0,r.w5)((()=>[o])),_:1},8,["onClick","disabled"])])),_:1})])),_:1}),(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{class:"q-pt-xs row no-wrap items-center text-grey"},{default:(0,r.w5)((()=>[(0,r._)("div",c,(0,l.zw)(e.order.trackingNumber),1),(0,r._)("div",s,(0,l.zw)(e.order.date),1)])),_:1}),(0,r.Wm)(h,{class:"q-pt-xs text-center"},{default:(0,r.w5)((()=>[(0,r._)("div",i,(0,l.zw)(e.encode(e.order.labelNumber)),1),(0,r._)("div",u,"#"+(0,l.zw)(e.order.labelNumber),1)])),_:1}),(0,r.Wm)(N,null,{default:(0,r.w5)((()=>[(0,r.Wm)(k,{onClick:e.print},{default:(0,r.w5)((()=>[d])),_:1},8,["onClick"])])),_:1})])),_:1})])])),_:1})}var p=a(1959),b=a(8825),k=a(7581),g=a(8625),h=a.n(g),N=new(h());const w=(0,r.aZ)({name:"Pick",components:{},setup(){const e=(0,b.Z)(),t=(0,p.iH)(""),a=(0,p.iH)(""),r=(0,p.qj)({labelNumber:"583039599",trackingNumber:"#3918",address:"Talabat Mart, Port Saed",date:"07-05-2021 15:55:43"});return{labelNumber:t,trackingNumber:a,order:r,pick(){r.labelNumber=t.value,r.trackingNumber=a.value,k.W.pick(r.labelNumber,r.trackingNumber).then((t=>{console.debug("$api.pick",r.labelNumber,"resp->",t.data),e.notify({type:"info",color:"primary",message:t.data.result})}))},scan(){e.dialog({title:"OCR Scaner",message:"Please scan screen"}).onOk((()=>{t.value="583039599",a.value="3918"}))},print(){console.log("Printing"),e.notify({spinner:!0,timeout:1e3,position:"top",message:"Printing Label",color:"primary"})},encode(e){return N.encode(e)}}}});var f=a(4379),_=a(5589),$=a(1206),v=a(5869),W=a(9367),y=a(7518),C=a.n(y);w.render=m;const q=w;C()(w,"components",{QPage:f.Z,QCardSection:_.Z,QInput:$.Z,QSeparator:v.Z,QCardActions:W.Z})}}]);