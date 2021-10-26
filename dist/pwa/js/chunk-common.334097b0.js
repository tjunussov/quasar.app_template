"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[64],{7581:(e,a,t)=>{t.d(a,{W:()=>c});var l=t(5474),s=t(6417),n=t(5724);function o(e){const a=e&&e.response&&e.response&&e.response.data&&e.response.data.type&&i18nErrors[e.response.data.type]?i18nErrors[e.response.data.type]:"Произошла ошибка";throw console.error(e.response?e.response:e),s.Z.create({type:"negative",message:a}),e}const r={location:"demo",track(e){return console.log("location",this.location),l.$http.post(`/locations/${this.location}/orders`,e).then((a=>i(e,a))).catch((e=>{o(e)}))},pick(e,a){return this.track({labelNumber:e||a,trackingNumber:a,status:"PICKING_COMPLETED"})},pack(e,a){return a?this.track({labelNumber:e,cellCode:a,status:"PACKING_COMPLETED"}):this.track({labelNumber:e,status:"PACKING_STARTED"})},ride(e){return this.track({labelNumber:e,status:"RIDER_CHECKEDOUT"})},riderCheckIn(e){return this.track({trackingNumber:e,status:"RIDER_CHECKEDIN"})},dashboard(){return l.$http.get(`/locations/${this.location}/orders-waiting`).catch((e=>{o(e)}))}},c=r;function i(e,a){return n.T.track(),a=a.data,a.result="Order"+(a.trackingNumber?" Tracking "+a.trackingNumber:"")+(a.cellCode?" Cell "+a.cellCode:"")+(a.labelNumber?" Label "+a.labelNumber:"")+(a.status?" Status "+a.status:""),console.debug("$api.track",e,a.data),s.Z.create({type:"info",color:"green",message:a.result}),a}},301:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(5724),s=t(499);const n={printLabel(e){console.debug("print",e),l.T.scanBegin(),window.setTimeout(window.print,500)},scan(e,a,t){return new Promise(((n,r)=>{var c=t||o(a);console.debug("scan",c);let i=1;const u=setInterval((()=>{i--,0==i&&(d.update({message:`Scanned code ${c}`}),clearInterval(u),setTimeout(d.hide,500),n(c),l.T.scaned())}),1e3),d=s.Z.create({title:`${a} ${e} scanner`,message:"Scanning ..."}).onOk((()=>{clearInterval(u),n(c)}))}))}};function o(e){var a=null!=localStorage.getItem(e)?localStorage.getItem(e):String(Math.ceil(1e5*Math.random()));return localStorage.setItem(e,a),a}const r=n},5724:(e,a,t)=>{t.d(a,{T:()=>c});const l="/audio/supermariobros/";var s=new Audio;s.src=l+"bindstart.mp3";var n=new Audio;n.src=l+"push2.mp3";var o=new Audio;o.src=l+"push3.mp3";var r=new Audio;r.src=l+"search1.mp3";const c={queue(){s.play()},scan(){n.play()},scaned(){o.play()},track(){r.play()}}},3486:(e,a,t)=>{t.d(a,{Z:()=>u});var l=t(3673);function s(e,a,t,s,n,o){const r=(0,l.up)("r-btn"),c=(0,l.up)("q-input");return(0,l.wg)(),(0,l.j4)(c,{label:e.label,modelValue:e.input,"update:modelValue":"input = $event",Zrules:"[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]"},{append:(0,l.w5)((()=>[(0,l.Wm)(r,{icon:"camera_alt",color:"grey",onClick:e.scanOCR},null,8,["onClick"])])),_:1},8,["label","modelValue"])}var n=t(301);t(5724);const o=(0,l.aZ)({name:"InputLabel",props:{label:{type:String,default:"Default"},length:{type:String,default:1},modelValue:String,message:{type:String,default:"Please scan screen"},type:{type:String,default:"ocr"},defaultValue:String,disabled:{type:Boolean,default:!1}},watch:{modelValue(e){this.input=e}},data(){return{input:""}},emits:["update:modelValue"],methods:{scanOCR(){n.Z.scan(this.type,this.label,this.defaultValue).then((e=>{this.input=e,this.$emit("update:modelValue",this.input)}))}}});var r=t(1206),c=t(7518),i=t.n(c);o.render=s;const u=o;i()(o,"components",{QInput:r.Z})},9653:(e,a,t)=>{t.d(a,{Z:()=>ne});var l=t(3673),s=t(2323);const n=(0,l.Uk)("Header");function o(e,a,t,o,r,c){const i=(0,l.up)("r-btn"),u=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-toolbar"),m=(0,l.up)("q-ajax-bar"),p=(0,l.up)("q-header"),b=(0,l.up)("Menu"),g=(0,l.up)("q-drawer"),w=(0,l.up)("q-page-container"),h=(0,l.up)("Nav"),f=(0,l.up)("q-footer"),_=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(_,{class:"bg-grey-4",view:"lHr LpR lFr"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{class:"bg-white shadow-light",bordered:"","height-hint":"98"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"q-pb-sm text-primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(u,{class:"text-center text-weight-bold text-black"},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"header",{},(()=>[n]))])),_:3}),(0,l.Wm)(i,{icon:"support_agent"})])),_:3}),(0,l.WI)(e.$slots,"list"),(0,l.Wm)(m,{ref:"bar",color:"primary",size:"4px"},null,512)])),_:3}),(0,l.Wm)(g,{class:"bg-primary",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[0]||(a[0]=a=>e.leftDrawerOpen=a),width:250,"show-if-above":"",bordered:"",side:"left",breakpoint:1400,dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b)])),_:1},8,["modelValue"]),(0,l.Wm)(w,{class:"max-width"},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3}),(0,l.WI)(e.$slots,"footer",{},(()=>[(0,l.Wm)(f,{class:(0,s.C_)(["bg-white shadow-light",{"ios-footer q-pb-md":e.$q.platform.is.ios}]),Zbordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"text-grey"})])),_:1},8,["class"])]))])),_:3})}const r={class:"full-height column"},c={class:"col",Zstyle:"height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"},i=(0,l.Uk)("Mümin Taş  "),u=(0,l.Uk)("3"),d=(0,l.Uk)("Dubai"),m=(0,l.Uk)("AbuDhabi"),p=(0,l.Uk)("Picker"),b=(0,l.Uk)("Packer"),g=(0,l.Uk)("Rider"),w=(0,l.Uk)("Dashboard"),h=(0,l.Uk)("Reports"),f=(0,l.Uk)("Admin"),_=(0,l.Uk)("Manual"),k={class:"text-grey text-center text-small q-pb-lg",dark:""},W=(0,l._)("img",{src:"/logo_text.svg",style:{height:"18px",width:"100px","Zmargin-bottom":"-2px",opacity:"0.8"}},null,-1),v={class:"text-caption"},y=(0,l.Uk)("©2021 Version "),q={class:"text-underline",to:"/"};function Z(e,a,t,n,o,Z){const C=(0,l.up)("q-badge"),x=(0,l.up)("q-item-label"),Q=(0,l.up)("q-item-section"),D=(0,l.up)("q-item"),I=(0,l.up)("q-list"),T=(0,l.up)("q-menu"),N=(0,l.up)("q-chip"),S=(0,l.up)("q-icon"),E=(0,l.up)("q-separator"),U=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",c,[(0,l.Wm)(I,{class:"text-weight-medium",dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"q-my-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{class:"q-pl-xs text-weight-bold"},{default:(0,l.w5)((()=>[i,(0,l.Wm)(C,{color:"red"},{default:(0,l.w5)((()=>[u])),_:1})])),_:1}),(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(N,{class:"q-ma-none","icon-right":"keyboard_arrow_down",Zdense:"","text-color":"white",color:"grey-7"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.menu.value.name),1),(0,l.Wm)(T,{square:""},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{separator:""},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(D,{clickable:"",active:"Dubai"==e.menu.value.name,onClick:a[0]||(a[0]=a=>e.select({name:"Dubai",code:"demo"}))},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[d])),_:1})])),_:1})])),_:1},8,["active"]),[[U]]),(0,l.wy)((0,l.Wm)(D,{clickable:"",active:"AbuDhabi"==e.menu.value.name,onClick:a[1]||(a[1]=a=>e.select({name:"AbuDhabi",code:"DEV"}))},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["active"]),[[U]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(I,{dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{clickable:"",to:"/pick","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"shopping_basket"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[p])),_:1})])),_:1}),(0,l.Wm)(E,{class:"q-my-none",spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/pack","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"inventory_2"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[b])),_:1})])),_:1}),(0,l.Wm)(E,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/ride","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"local_shipping"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[g])),_:1})])),_:1}),(0,l.Wm)(E,{class:"q-my-sm"}),(0,l.Wm)(D,{clickable:"",to:"/dashboard","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"tv"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[w])),_:1})])),_:1}),(0,l.Wm)(E,{class:"q-my-sm"}),(0,l.Wm)(D,{clickable:"",to:"/reports",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"show_chart"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[h])),_:1})])),_:1}),(0,l.Wm)(E,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/settings",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"settings"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[f])),_:1})])),_:1}),(0,l.Wm)(E,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/manual",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"contact_support"})])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[_])),_:1})])),_:1})])),_:1})])),_:1})]),(0,l._)("div",k,[W,(0,l._)("div",v,[y,(0,l._)("span",q,(0,s.zw)(e.$version),1)])])])}var C=t(1959),x=t(7581);const Q=(0,l.aZ)({name:"Menu",setup(){const e=(0,C.qj)({value:{name:"Dubai",code:"demo"}});return{menu:e,select(a){x.W.location=a.code,e.value=a}}}});var D=t(7011),I=t(3414),T=t(2035),N=t(2350),S=t(9721),E=t(7030),U=t(6335),V=t(5869),$=t(4554),P=t(677),L=t(7518),A=t.n(L);Q.render=Z;const R=Q;function M(e,a,t,s,n,o){const r=(0,l.up)("q-route-tab"),c=(0,l.up)("q-tabs");return(0,l.wg)(),(0,l.j4)(c,{class:"my-tabs",modelValue:n.tabs,"onUpdate:modelValue":a[0]||(a[0]=e=>n.tabs=e),stretch:"",Zalign:"justify","no-caps":"","active-color":"primary","switch-indicator":"","indicator-color":"transparent"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"home",icon:"shopping_basket",label:"Pick",to:"/pick"}),(0,l.Wm)(r,{name:"alarms",icon:"inventory_2",label:"Pack",to:"/pack"}),(0,l.Wm)(r,{name:"auto",icon:"local_shipping",to:"/ride",label:"Ride"})])),_:1},8,["modelValue"])}A()(Q,"components",{QList:D.Z,QItem:I.Z,QItemSection:T.Z,QItemLabel:N.Z,QBadge:S.Z,QChip:E.Z,QMenu:U.Z,QSeparator:V.Z,QIcon:$.Z}),A()(Q,"directives",{ClosePopup:P.Z});const O={name:"Nav",components:{},data(){return{tabs:"home"}},computed:{},created(){},methods:{}};var H=t(2496),j=t(2770),B=t(8240),G=t(8408),K=t(1007);O.render=M;const z=O;A()(O,"components",{QTabs:H.Z,QRouteTab:j.Z,QBtn:B.Z,QTab:G.Z,QPageSticky:K.Z});const F=(0,l.aZ)({name:"AppLayout",components:{Menu:R,Nav:z},setup(){const e=(0,C.iH)(!1),a=(0,C.iH)(null);return{bar:a,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},resetScroll(e,a){document.documentElement.scrollTop=0,document.body.scrollTop=0,a()}}}});var J=t(3066),X=t(3812),Y=t(9570),ee=t(3747),ae=t(614),te=t(2901),le=t(2652),se=t(1762);F.render=o;const ne=F;A()(F,"components",{QLayout:J.Z,QHeader:X.Z,QToolbar:Y.Z,QToolbarTitle:ee.Z,QAjaxBar:ae.Z,QDrawer:te.Z,QPageContainer:le.Z,QFooter:se.Z,QSeparator:V.Z})}}]);