"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[393],{6751:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var l=a(3673),r=a(8880);const n=(0,l.Uk)("Pick"),i={class:"q-gutter-y-md full-width"},o=(0,l.Uk)("Use Label"),s=(0,l.Uk)("Pick");function u(e,t,a,u,d,c){const m=(0,l.up)("orderHistory"),p=(0,l.up)("print"),b=(0,l.up)("q-card"),w=(0,l.up)("q-dialog"),h=(0,l.up)("InputScan"),g=(0,l.up)("q-card-section"),_=(0,l.up)("q-checkbox"),k=(0,l.up)("q-slide-transition"),f=(0,l.up)("r-btn"),N=(0,l.up)("q-card-actions"),q=(0,l.up)("r-card"),W=(0,l.up)("q-page"),Z=(0,l.up)("layout");return(0,l.wg)(),(0,l.j4)(Z,null,{header:(0,l.w5)((()=>[n])),list:(0,l.w5)((()=>[(0,l.Wm)(m,{hist:e.order,onOpen:e.recover,onClear:t[0]||(t[0]=t=>e.order=null)},null,8,["hist","onOpen"])])),default:(0,l.w5)((()=>[(0,l.Wm)(W,{class:"q-pa-lg flex flex-center"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(w,{modelValue:e.showPrintDialog,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showPrintDialog=t),size:"lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{class:"full-width q-pa-lg Zno-border-radius no-box-shadow"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{ref:"printRef",data:e.order},null,8,["data"])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,{label:"Tracking Number",type:"ocr",extract:"ocr_picker",modelValue:e.trackingNumber,"onUpdate:modelValue":t[2]||(t[2]=t=>e.trackingNumber=t),length:"9",onData:e.multiData},null,8,["modelValue","onData"])])),_:1}),(0,l.Wm)(g,{class:"q-pa-none q-pl-xs"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{modelValue:e.useLabel,"onUpdate:modelValue":t[3]||(t[3]=t=>e.useLabel=t),onClick:t[4]||(t[4]=t=>e.labelNumber="")},{default:(0,l.w5)((()=>[o])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,{label:"Label Number",type:"barcode",modelValue:e.labelNumber,"onUpdate:modelValue":t[5]||(t[5]=t=>e.labelNumber=t),length:"4"},null,8,["modelValue"])])),_:1},512),[[r.F8,e.useLabel]])])),_:1}),(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f,{onClick:e.pick,disabled:!e.trackingNumber},{default:(0,l.w5)((()=>[s])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])])),_:1})])),_:1})}var d=a(7325),c=a(2323);function m(e,t,a,n,i,o){const s=(0,l.up)("q-icon"),u=(0,l.up)("q-item-label"),d=(0,l.up)("q-item-section"),m=(0,l.up)("r-btn"),p=(0,l.up)("q-item"),b=(0,l.up)("q-slide-item"),w=(0,l.up)("q-list"),h=(0,l.up)("q-slide-transition"),g=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(h,{duration:500},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(w,{class:"q-pa-xs text-primary",bordered:"",separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{onRight:o.onRight,"right-color":"red"},{right:(0,l.w5)((()=>[(0,l.Wm)(s,{name:"clear"})])),default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(p,{clickable:"",onClick:t[0]||(t[0]=t=>e.$emit("open",a.hist))},{default:(0,l.w5)((()=>[a.hist&&a.hist.created?((0,l.wg)(),(0,l.j4)(d,{key:0,class:"text-dark q-pl-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"text-h6 text-weight-bold"},{default:(0,l.w5)((()=>[(0,l.Uk)("Order #"+(0,c.zw)(a.hist.labelNumber),1)])),_:1}),(0,l.Wm)(u,{class:"text-small"},{default:(0,l.w5)((()=>[(0,l.Uk)("Created "+(0,c.zw)(e.$format(a.hist.created,"HH:mm")),1)])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(d,{side:"",top:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{icon:"more_vert"})])),_:1})])),_:1},512),[[g]])])),_:1},8,["onRight"])])),_:1},512),[[r.F8,a.hist&&a.hist.created]])])),_:1})}const p={name:"OrderHistory",props:{hist:Object},emits:["open","clear"],methods:{onRight({reset:e}){e(),this.$emit("clear")}}};var b=a(2471),w=a(7011),h=a(7257),g=a(4554),_=a(3414),k=a(2035),f=a(8240),N=a(2350),q=a(6489),W=a(7518),Z=a.n(W);p.render=m;const x=p;Z()(p,"components",{QSlideTransition:b.Z,QList:w.Z,QSlideItem:h.Z,QIcon:g.Z,QItem:_.Z,QItemSection:k.Z,QBtn:f.Z,QItemLabel:N.Z}),Z()(p,"directives",{Ripple:q.Z});var y=a(1483);const v={class:"col ellipsis"},Q={class:"col-auto text-caption"},D={class:"barcode"},P={class:"text-h5 text-weight-bold"},C={key:0,class:"hidden",id:"printSection"};function V(e,t,a,r,n,i){const o=(0,l.up)("q-card-section");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(o,{class:"q-pt-xs row no-wrap items-center text-grey"},{default:(0,l.w5)((()=>[(0,l._)("div",v,(0,c.zw)(e.data.trackingNumber),1),(0,l._)("div",Q,(0,c.zw)(e.$format(e.data.created,"DD.MM.YYYY  HH:mm:ss")),1)])),_:1}),(0,l.Wm)(o,{class:"q-pt-xs text-center"},{default:(0,l.w5)((()=>[(0,l._)("div",D,(0,c.zw)(e.encode(e.data.labelNumber||e.data.trackingNumber)),1),(0,l._)("div",P,"#"+(0,c.zw)(e.data.labelNumber||e.data.trackingNumber),1)])),_:1}),e.data?((0,l.wg)(),(0,l.iD)("pre",C,'N\nq720\nj555\nl8,C,001\nX0,40,4,710,640\n \nA20,210,0,4,1,1,N,""\n \nB20,240,0,1,2,2,100,B,"'+(0,c.zw)(e.data.labelNumber||e.data.trackingNumber)+'"\n \nA20,480,0,4,1,1,N,"COTPYDHNK"\nA300,480,0,4,1,1,N,"'+(0,c.zw)(e.data.created)+'"\nA380,480,0,4,1,1,N,"_______________"\n \nA20,510,0,1,1,1,N,"© 2021 Powered by Toolpar, Tastamat Instore"\nP1\nN',1)):(0,l.kq)("",!0)],64)}var L=a(301),S=a(8625),U=a.n(S),z=new(U());const H=(0,l.aZ)({name:"Print",props:["data"],methods:{print(){console.debug("Printing"),this.$q.notify({spinner:!0,timeout:1e3,position:"top",message:"Printing Label",color:"primary"});var e=document.getElementById("printSection").innerText;L.Z.printLabel(e)},encode(e){return z.encode(e)}}});var I=a(5589);H.render=V;const T=H;Z()(H,"components",{QCardSection:I.Z});var A=a(7581);const O=(0,l.aZ)({name:"Pick",components:{layout:d.Z,print:T,orderHistory:x,InputScan:y.Z},data(){return{useLabel:!1,labelNumber:null,trackingNumber:null,showPrintDialog:!1,order:null,raw:null}},watch:{showPrintDialog(e){e&&window.setTimeout((()=>{this.showPrintDialog=!1}),4e3)}},methods:{recover(e){this.labelNumber=e.labelNumber,this.trackingNumber=e.trackingNumber,this.order=null},clear(){this.labelNumber=null,this.trackingNumber=null,this.useLabel=!1},multiData(e){this.raw=e.raw},pick(){A.W.pick(this.labelNumber,this.trackingNumber,this.raw).then((e=>{this.showPrintDialog=!0,this.order=e,this.clear()}))}}});var R=a(4379),Y=a(6778),j=a(151),$=a(9367),B=a(5735);O.render=u;const F=O;Z()(O,"components",{QPage:R.Z,QDialog:Y.Z,QCard:j.Z,QCardActions:$.Z,QCardSection:I.Z,QCheckbox:B.Z,QSlideTransition:b.Z})}}]);