"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[64],{7581:(e,t,a)=>{a.d(t,{W:()=>i});var o=a(5474),n=a(6417),l=a(5724);function r(e){const t=e&&e.response&&e.response&&e.response.data&&e.response.data.type&&i18nErrors[e.response.data.type]?i18nErrors[e.response.data.type]:"Произошла ошибка";throw console.error(e.response?e.response:e),n.Z.create({type:"negative",message:t}),e}const s={location:"demo",raw:null,track(e){return console.debug("location",this.location),o.$http.post(`/locations/${this.location}/orders`,e).then((t=>c(e,t))).catch((e=>{r(e)}))},pick(e,t,a){return this.track({labelNumber:e||t,trackingNumber:t,status:"PICKING_COMPLETED",data:a})},pack(e,t){return t?this.track({labelNumber:e,cellCode:t,status:"PACKING_COMPLETED"}):this.track({labelNumber:e,status:"PACKING_STARTED"})},ride(e){return this.track({labelNumber:e,status:"RIDER_CHECKEDOUT"})},riderCheckIn(e,t){return this.track({trackingNumber:e,data:t,status:"RIDER_CHECKEDIN"})},dashboard(){return o.$http.get(`/locations/${this.location}/orders-waiting`).catch((e=>{r(e)}))}},i=s;function c(e,t){return l.T.track(),t=t.data,t.result="Order"+(t.locationCode?" Location "+t.locationCode:"")+(t.trackingNumber?" Tracking "+t.trackingNumber:"")+(t.cellCode?" Cell "+t.cellCode:"")+(t.labelNumber?" Label "+t.labelNumber:"")+(t.status?" Status "+t.status:"")+(t.waiting?" WAITING ":""),console.debug("$api.track",e,t),n.Z.create({type:"info",color:"green",message:t.result}),t}},301:(e,t,a)=>{a.d(t,{Z:()=>c});var o=a(5724),n=a(499),l=a(4688);const r={printLabel(e){return o.T.print(),new Promise(((t,a)=>{window.cordova.plugins.printer.print(t,(e=>{a("Printing failed: "+e)}),e)}))},scanOCR(e,t){return new Promise(((a,o)=>{window.cordova.plugins.ocr.scan(a,(e=>{o("Scanning failed: "+e)}),{ocrType:e,aspectRatio:1,mock:t})}))},scanBarcode(e){return new Promise(((t,a)=>{window.cordova.plugins.barcodeScanner.scan(t,(e=>{a("Scanning failed: "+e)}),{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!1,saveHistory:!1,prompt:"Place a barcode inside the scan area",resultDisplayDuration:0,formats:"EAN_13",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1,mock:e})}))}};function s(e,t,a,l){let r=1;const s=setInterval((()=>{r--,0==r&&(i.update({message:`Scanned code ${a&&a.text?a.text:a} <code>${a.raw?a.raw+"</code>":""} `}),clearInterval(s),setTimeout(i.hide,1e3),e(a),o.T.scaned())}),1e3),i=n.Z.create({title:`${l.mock.label} ${l.type||"barcode"} scanner`,message:"Scanning ...",html:!0}).onOk((()=>{clearInterval(s),e(a)}))}function i(e){var t=null!=localStorage.getItem(e)?localStorage.getItem(e):String(Math.ceil(1e5*Math.random()));return localStorage.setItem(e,t),t}console.debug("useQuasar.Platform",l.ZP.is),l.ZP.is.cordova||(window.cordova={plugins:{barcodeScanner:{scan:function(e,t,a){var o=a.mock.defaultValue||i(a.mock.label);s(e,t,o,a)}},ocr:{scan:function(e,t,a){var o={text:a.mock.defaultValue||i(a.mock.label),raw:"989079909 351 PM 583071708 OD 7 Days Chocolate Croissant 55 Gm AED 1.90 Almarai Milk Premium Mango 250 M o/n AED 2.65 Almarai Milk Premium Strawberry 250 MI 0/2 AED 2.60"};a.type="ocr",s(e,t,o,a)}},printer:{print:function(e,t,a){console.debug("mock cordova print",a),window.setTimeout((()=>{window.print(),e()}),500)}}}});const c=r},5724:(e,t,a)=>{a.d(t,{T:()=>d});const o="audio/supermariobros/";var n=new Audio;n.src=o+"bindstart.mp3";var l=new Audio;l.src=o+"bindend.mp3";var r=new Audio;r.src=o+"push2.mp3";var s=new Audio;s.src=o+"push3.mp3";var i=new Audio;i.src=o+"push1.mp3";var c=new Audio;c.src=o+"push1.mp3";const d={enqueue(){n.play()},dequeue(){l.play()},scan(){r.play()},scaned(){s.play()},track(){i.play()},print(){c.play()}}},6918:(e,t,a)=>{a.d(t,{Z:()=>u});var o=a(3673);function n(e,t,a,n,l,r){const s=(0,o.up)("r-btn"),i=(0,o.up)("q-input");return(0,o.wg)(),(0,o.j4)(i,{label:e.label,Zsize:"lg",ref:"input",Zoutlined:"",modelValue:e.input,"onUpdate:modelValue":t[1]||(t[1]=t=>{e.input=t,e.$emit("update:modelValue",e.input)}),Zrules:"[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]"},{append:(0,o.w5)((()=>[(0,o.Wm)(s,{icon:"barcode"==e.type?e.mdiBarcodeScan:"camera_alt",ref:"btn",color:"grey",onClick:t[0]||(t[0]=t=>"ocr"==e.type?e.scanOCR(t):e.scanBarcode(t))},null,8,["icon"])])),_:1},8,["label","modelValue"])}var l=a(301),r=(a(5724),a(488));const s=(0,o.aZ)({created(){this.mdiBarcodeScan=r.Al3},name:"InputLabel",props:{label:{type:String,default:"Default"},length:{type:String,default:1},modelValue:String,extract:{type:String,default:"#"},message:{type:String,default:"Please scan screen"},type:{type:String,default:"ocr"},prefix:{type:String,default:""},defaultValue:String,disabled:{type:Boolean,default:!1}},watch:{modelValue(e){this.input=e}},data(){return{input:"",mdiBarcodeScan:null}},mounted(){"barcode"==this.type&&this.$bus.$on("keyboard:keydown:enter"+(this.prefix?":"+this.prefix:""),this.keyboardBarcode)},beforeUnmount(){"barcode"==this.type&&this.$bus.$off("keyboard:keydown:enter"+(this.prefix?":"+this.prefix:""),this.keyboardBarcode)},emits:["update:modelValue","data","blur"],methods:{scanOCR(){l.Z.scanOCR(this.extract,{label:this.label,defaultValue:this.defaultValue}).then((e=>{console.debug("$cordovaApi.scanOCR",e),this.input=e.text?e.text:e,e&&e.raw&&this.$emit("data",e),this.$emit("update:modelValue",this.input),this.defocus()}))},scanBarcode(e){l.Z.scanBarcode({label:this.label,defaultValue:this.defaultValue}).then((t=>{console.debug("$cordovaApi.scanBarcode",t),this.input=t,this.$emit("update:modelValue",this.input),this.defocus(e)}))},keyboardBarcode(e){this.input=e,this.$emit("update:modelValue",this.input),this.defocus()},defocus(e){document.activeElement instanceof HTMLElement&&document.activeElement.blur(),window.focus(),document.body.focus()}}});var i=a(1206),c=a(7518),d=a.n(c);s.render=n;const u=s;d()(s,"components",{QInput:i.Z})},4808:(e,t,a)=>{a.d(t,{Z:()=>ie});var o=a(3673),n=a(2323);const l=(0,o.Uk)("Header");function r(e,t,a,r,s,i){const c=(0,o.up)("Keyboard"),d=(0,o.up)("r-btn"),u=(0,o.up)("q-toolbar-title"),m=(0,o.up)("q-toolbar"),p=(0,o.up)("q-ajax-bar"),b=(0,o.up)("q-header"),h=(0,o.up)("Menu"),k=(0,o.up)("q-drawer"),w=(0,o.up)("q-page-container"),g=(0,o.up)("Nav"),f=(0,o.up)("q-footer"),y=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(y,{class:"bg-grey-4",view:"lHr LpR lFr"},{default:(0,o.w5)((()=>[(0,o.Wm)(c),(0,o.Wm)(b,{class:"bg-white shadow-light",bordered:"","height-hint":"98"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"q-pa-sm text-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(u,{class:"text-h5 text-center text-weight-bold text-black"},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"header",{},(()=>[l]))])),_:3}),(0,o.Wm)(d,{icon:"support_agent"})])),_:3}),(0,o.WI)(e.$slots,"list"),(0,o.Wm)(p,{ref:"bar",color:"primary",size:"4px"},null,512)])),_:3}),(0,o.Wm)(k,{class:"bg-primary",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),width:250,"show-if-above":"",bordered:"",side:"left",breakpoint:1400,dark:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h)])),_:1},8,["modelValue"]),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default")])),_:3}),(0,o.WI)(e.$slots,"footer",{},(()=>[(0,o.Wm)(f,{class:(0,n.C_)(["bg-white shadow-light",{"ios-footer q-pb-md":e.$q.platform.is.ios}]),Zbordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"text-grey"})])),_:1},8,["class"])]))])),_:3})}const s={class:"full-height column"},i={class:"col",Zstyle:"height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"},c=(0,o.Uk)("Mümin Taş  "),d=(0,o.Uk)("3"),u=(0,o.Uk)("Picker"),m=(0,o.Uk)("Packer"),p=(0,o.Uk)("Rider"),b=(0,o.Uk)("Dashboard"),h=(0,o.Uk)("Reports"),k=(0,o.Uk)("Admin"),w=(0,o.Uk)("Manual"),g={class:"text-grey text-center text-small q-pb-lg",dark:""},f=(0,o._)("img",{src:"/logo_text.svg",style:{height:"18px",width:"100px","Zmargin-bottom":"-2px",opacity:"0.8"}},null,-1),y={class:"text-caption"},v=(0,o.Uk)("©2021 Version "),_={class:"text-underline",to:"/"};function W(e,t,a,l,r,W){const x=(0,o.up)("q-badge"),C=(0,o.up)("q-item-label"),T=(0,o.up)("q-item-section"),Z=(0,o.up)("q-item"),q=(0,o.up)("q-list"),S=(0,o.up)("q-menu"),$=(0,o.up)("q-chip"),I=(0,o.up)("q-icon"),D=(0,o.up)("q-separator"),P=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",i,[(0,o.Wm)(q,{class:"text-weight-medium",dark:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{class:"q-my-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{class:"q-pl-xs text-weight-bold"},{default:(0,o.w5)((()=>[c,(0,o.Wm)(x,{color:"red"},{default:(0,o.w5)((()=>[d])),_:1})])),_:1}),(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Wm)($,{class:"q-ma-none","icon-right":"keyboard_arrow_down",Zdense:"","text-color":"white",color:"grey-7"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.menu[e.selected]),1),(0,o.Wm)(S,{square:""},{default:(0,o.w5)((()=>[(0,o.Wm)(q,{separator:""},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menu,((t,a)=>(0,o.wy)(((0,o.wg)(),(0,o.j4)(Z,{clickable:"",active:e.selected==t,onClick:t=>e.select(a)},{default:(0,o.w5)((()=>[(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["active","onClick"])),[[P]]))),256))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(q,{dark:""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{clickable:"",to:"/pick","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"shopping_basket"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[u])),_:1})])),_:1}),(0,o.Wm)(D,{class:"q-my-none",spaced:"0",inset:"item",dark:""}),(0,o.Wm)(Z,{clickable:"",to:"/pack","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"inventory_2"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[m])),_:1})])),_:1}),(0,o.Wm)(D,{spaced:"0",inset:"item",dark:""}),(0,o.Wm)(Z,{clickable:"",to:"/ride","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"local_shipping"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[p])),_:1})])),_:1}),(0,o.Wm)(D,{class:"q-my-sm"}),(0,o.Wm)(Z,{clickable:"",to:"/dashboard","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"tv"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[b])),_:1})])),_:1}),(0,o.Wm)(D,{class:"q-my-sm"}),(0,o.Wm)(Z,{clickable:"",to:"/reports",disabled:"","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"show_chart"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[h])),_:1})])),_:1}),(0,o.Wm)(D,{spaced:"0",inset:"item",dark:""}),(0,o.Wm)(Z,{clickable:"",to:"/settings",disabled:"","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"settings"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[k])),_:1})])),_:1}),(0,o.Wm)(D,{spaced:"0",inset:"item",dark:""}),(0,o.Wm)(Z,{clickable:"",to:"/manual",disabled:"","active-class":"bg-indigo-8"},{default:(0,o.w5)((()=>[(0,o.Wm)(T,{class:"q-ml-md",avatar:""},{default:(0,o.w5)((()=>[(0,o.Wm)(I,{name:"contact_support"})])),_:1}),(0,o.Wm)(T,null,{default:(0,o.w5)((()=>[w])),_:1})])),_:1})])),_:1})])),_:1})]),(0,o._)("div",g,[f,(0,o._)("div",y,[v,(0,o._)("span",_,(0,n.zw)(e.$version),1)])])])}var x=a(7581);const C=(0,o.aZ)({name:"Menu",data(){return{menu:{DEV:"AbuDhabi",demo:"Dubai"},selected:null!=localStorage.getItem("location")?localStorage.getItem("location"):"demo"}},methods:{select(e){this.selected=x.W.location=e,localStorage.setItem("location",e)}}});var T=a(7011),Z=a(3414),q=a(2035),S=a(2350),$=a(9721),I=a(7030),D=a(6335),P=a(5869),E=a(4554),Q=a(677),V=a(7518),A=a.n(V);C.render=W;const N=C;function U(e,t,a,n,l,r){const s=(0,o.up)("q-route-tab"),i=(0,o.up)("q-tabs");return(0,o.wg)(),(0,o.j4)(i,{class:"my-tabs",modelValue:l.tabs,"onUpdate:modelValue":t[0]||(t[0]=e=>l.tabs=e),stretch:"",Zalign:"justify","no-caps":"","active-color":"primary","switch-indicator":"","indicator-color":"transparent"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{name:"home",icon:"shopping_basket",label:"Pick",to:"/pick"}),(0,o.Wm)(s,{name:"alarms",icon:"inventory_2",label:"Pack",to:"/pack"}),(0,o.Wm)(s,{name:"auto",icon:"local_shipping",to:"/ride",label:"Ride"})])),_:1},8,["modelValue"])}A()(C,"components",{QList:T.Z,QItem:Z.Z,QItemSection:q.Z,QItemLabel:S.Z,QBadge:$.Z,QChip:I.Z,QMenu:D.Z,QSeparator:P.Z,QIcon:E.Z}),A()(C,"directives",{ClosePopup:Q.Z});const B={name:"Nav",components:{},data(){return{tabs:"home"}},computed:{},created(){},methods:{}};var L=a(2496),M=a(2770),O=a(8240),R=a(8408),K=a(1007);B.render=U;const H=B;A()(B,"components",{QTabs:L.Z,QRouteTab:M.Z,QBtn:O.Z,QTab:R.Z,QPageSticky:K.Z});const j={class:"keyboard"};function G(e,t,a,l,r,s){return(0,o.wg)(),(0,o.iD)("div",j,(0,n.zw)(r.keyText),1)}var z;a(5474);const F={name:"Keyboard",data(){return{keyText:""}},created(){window.addEventListener("keydown",this.documentKeydown)},beforeUnmount(){window.removeEventListener("keydown",this.documentKeydown)},methods:{documentKeydown(e){if(!(e.target.className.indexOf("nokeyboard")>=0)){if(e.keyCode>=96&&e.keyCode<=105?this.keyText+=String.fromCharCode(e.keyCode-48):e.keyCode>=65&&e.keyCode<=90?this.keyText+=String.fromCharCode(e.keyCode+(e.shiftKey?0:32)):e.keyCode>=48&&e.keyCode<=57?!e.shiftKey||50!=e.keyCode&&51!=e.keyCode?this.keyText+=String.fromCharCode(e.keyCode):this.keyText+=e.key:110!=e.keyCode&&190!=e.keyCode||(this.keyText+="."),8==e.keyCode&&(this.keyText=this.keyText.slice(0,-1)),13==e.keyCode){var t=this.keyText.substr(0,1);13==this.keyText.length?console.debug("emitting 13 len key text",this.keyText):(console.debug("emitting POIP",t,this.keyText.slice(1)),this.$bus.$emit("keyboard:keydown:enter:"+t,this.keyText.slice(1))),""!=this.keyText&&(this.$bus.$emit("keyboard:keydown:enter:"+this.keyText.length,this.keyText),this.$bus.$emit("keyboard:keydown:enter",this.keyText),this.keyText="",e.preventDefault())}window.clearTimeout(z),z=window.setTimeout((()=>{this.keyText=""}),1e3)}}}};F.render=G;const Y=F;var J=a(1959);const X=(0,o.aZ)({name:"AppLayout",components:{Menu:N,Nav:H,Keyboard:Y},setup(){const e=(0,J.iH)(!1),t=(0,J.iH)(null);return{bar:t,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},resetScroll(e,t){document.documentElement.scrollTop=0,document.body.scrollTop=0,t()}}}});var ee=a(3066),te=a(3812),ae=a(9570),oe=a(3747),ne=a(614),le=a(2901),re=a(2652),se=a(1762);X.render=r;const ie=X;A()(X,"components",{QLayout:ee.Z,QHeader:te.Z,QToolbar:ae.Z,QToolbarTitle:oe.Z,QAjaxBar:ne.Z,QDrawer:le.Z,QPageContainer:re.Z,QFooter:se.Z,QSeparator:P.Z})}}]);