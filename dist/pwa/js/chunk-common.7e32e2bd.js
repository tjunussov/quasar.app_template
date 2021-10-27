"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[64],{7581:(e,t,a)=>{a.d(t,{W:()=>i});a(9544);var l=a(5474),s=a(6417),o=a(5724);function n(e){const t=e&&e.response&&e.response&&e.response.data&&e.response.data.type&&i18nErrors[e.response.data.type]?i18nErrors[e.response.data.type]:"Произошла ошибка";throw console.error(e.response?e.response:e),s.Z.create({type:"negative",message:t}),e}const r={location:"demo",raw:null,rawData(e){this.raw=e},track(e){return console.log("location",this.location),this.raw&&(e.data=this.raw),l.$http.post(`/locations/${this.location}/orders`,e).then((t=>d(e,t))).catch((e=>{n(e)}))},pick(e,t){return this.track({labelNumber:e||t,trackingNumber:t,status:"PICKING_COMPLETED"}).finally((()=>{this.raw=null}))},pack(e,t){return t?this.track({labelNumber:e,cellCode:t,status:"PACKING_COMPLETED"}):this.track({labelNumber:e,status:"PACKING_STARTED"})},ride(e){return this.track({labelNumber:e,status:"RIDER_CHECKEDOUT"})},riderCheckIn(e,t){return this.track({trackingNumber:e,data:t,status:"RIDER_CHECKEDIN"})},dashboard(){return l.$http.get(`/locations/${this.location}/orders-waiting`).catch((e=>{n(e)}))}},i=r;function d(e,t){return o.T.track(),t=t.data,t.result="Order"+(t.trackingNumber?" Tracking "+t.trackingNumber:"")+(t.cellCode?" Cell "+t.cellCode:"")+(t.labelNumber?" Label "+t.labelNumber:"")+(t.status?" Status "+t.status:""),console.debug("$api.track",e,t.data),s.Z.create({type:"info",color:"green",message:t.result}),t}},301:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(5724),s=a(7581),o=a(499);const n={printLabel(e){console.debug("print",e),l.T.scanBegin(),window.setTimeout(window.print,500)},scan(e,t,a){return new Promise(((n,i)=>{var d=a||r(t);"ocr"==e&&s.W.rawData("Raw Full Data 1031928301 is here "),console.debug("scan",d);let c=1;const u=setInterval((()=>{c--,0==c&&(m.update({message:`Scanned code ${d}`}),clearInterval(u),setTimeout(m.hide,500),n(d),l.T.scaned())}),1e3),m=o.Z.create({title:`${t} ${e} scanner`,message:"Scanning ..."}).onOk((()=>{clearInterval(u),n(d)}))}))}};function r(e){var t=null!=localStorage.getItem(e)?localStorage.getItem(e):String(Math.ceil(1e5*Math.random()));return localStorage.setItem(e,t),t}const i=n},5724:(e,t,a)=>{a.d(t,{T:()=>i});const l="audio/supermariobros/";var s=new Audio;s.src=l+"bindstart.mp3";var o=new Audio;o.src=l+"push2.mp3";var n=new Audio;n.src=l+"push3.mp3";var r=new Audio;r.src=l+"search1.mp3";const i={queue(){s.play()},scan(){o.play()},scaned(){n.play()},track(){r.play()}}},3926:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(3673);function s(e,t,a,s,o,n){const r=(0,l.up)("r-btn"),i=(0,l.up)("q-input");return(0,l.wg)(),(0,l.j4)(i,{label:e.label,modelValue:e.input,"update:modelValue":"input = $event",Zrules:"[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]"},{append:(0,l.w5)((()=>[(0,l.Wm)(r,{icon:"camera_alt",color:"grey",onClick:e.scanOCR},null,8,["onClick"])])),_:1},8,["label","modelValue"])}var o=a(301);a(5724);const n=(0,l.aZ)({name:"InputLabel",props:{label:{type:String,default:"Default"},length:{type:String,default:1},modelValue:String,message:{type:String,default:"Please scan screen"},type:{type:String,default:"ocr"},defaultValue:String,disabled:{type:Boolean,default:!1}},watch:{modelValue(e){this.input=e}},data(){return{input:""}},mounted(){this.$bus.$on("keyboard:keydown:enter",this.keyboardBarcode)},beforeUnmount(){this.$bus.$off("keyboard:keydown:enter",this.keyboardBarcode)},emits:["update:modelValue"],methods:{scanOCR(){o.Z.scan(this.type,this.label,this.defaultValue).then((e=>{this.input=e,this.$emit("update:modelValue",this.input)}))},keyboardBarcode(e){this.input=e,this.$emit("update:modelValue",this.input)}}});var r=a(1206),i=a(7518),d=a.n(i);n.render=s;const c=n;d()(n,"components",{QInput:r.Z})},6181:(e,t,a)=>{a.d(t,{Z:()=>ce});var l=a(3673),s=a(2323);const o=(0,l.Uk)("Header");function n(e,t,a,n,r,i){const d=(0,l.up)("Keyboard"),c=(0,l.up)("r-btn"),u=(0,l.up)("q-toolbar-title"),m=(0,l.up)("q-toolbar"),p=(0,l.up)("q-ajax-bar"),b=(0,l.up)("q-header"),h=(0,l.up)("Menu"),k=(0,l.up)("q-drawer"),w=(0,l.up)("q-page-container"),g=(0,l.up)("Nav"),y=(0,l.up)("q-footer"),f=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(f,{class:"bg-grey-4",view:"lHr LpR lFr"},{default:(0,l.w5)((()=>[(0,l.Wm)(d),(0,l.Wm)(b,{class:"bg-white shadow-light",bordered:"","height-hint":"98"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"q-pb-sm text-primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(u,{class:"text-center text-weight-bold text-black"},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"header",{},(()=>[o]))])),_:3}),(0,l.Wm)(c,{icon:"support_agent"})])),_:3}),(0,l.WI)(e.$slots,"list"),(0,l.Wm)(p,{ref:"bar",color:"primary",size:"4px"},null,512)])),_:3}),(0,l.Wm)(k,{class:"bg-primary",modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),width:250,"show-if-above":"",bordered:"",side:"left",breakpoint:1400,dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h)])),_:1},8,["modelValue"]),(0,l.Wm)(w,{class:"max-width"},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3}),(0,l.WI)(e.$slots,"footer",{},(()=>[(0,l.Wm)(y,{class:(0,s.C_)(["bg-white shadow-light",{"ios-footer q-pb-md":e.$q.platform.is.ios}]),Zbordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"text-grey"})])),_:1},8,["class"])]))])),_:3})}const r={class:"full-height column"},i={class:"col",Zstyle:"height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"},d=(0,l.Uk)("Mümin Taş  "),c=(0,l.Uk)("3"),u=(0,l.Uk)("Dubai"),m=(0,l.Uk)("AbuDhabi"),p=(0,l.Uk)("Picker"),b=(0,l.Uk)("Packer"),h=(0,l.Uk)("Rider"),k=(0,l.Uk)("Dashboard"),w=(0,l.Uk)("Reports"),g=(0,l.Uk)("Admin"),y=(0,l.Uk)("Manual"),f={class:"text-grey text-center text-small q-pb-lg",dark:""},_=(0,l._)("img",{src:"/logo_text.svg",style:{height:"18px",width:"100px","Zmargin-bottom":"-2px",opacity:"0.8"}},null,-1),W={class:"text-caption"},v=(0,l.Uk)("©2021 Version "),x={class:"text-underline",to:"/"};function C(e,t,a,o,n,C){const T=(0,l.up)("q-badge"),q=(0,l.up)("q-item-label"),Z=(0,l.up)("q-item-section"),D=(0,l.up)("q-item"),$=(0,l.up)("q-list"),I=(0,l.up)("q-menu"),Q=(0,l.up)("q-chip"),S=(0,l.up)("q-icon"),N=(0,l.up)("q-separator"),E=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",i,[(0,l.Wm)($,{class:"text-weight-medium",dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{class:"q-my-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:"q-pl-xs text-weight-bold"},{default:(0,l.w5)((()=>[d,(0,l.Wm)(T,{color:"red"},{default:(0,l.w5)((()=>[c])),_:1})])),_:1}),(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"q-ma-none","icon-right":"keyboard_arrow_down",Zdense:"","text-color":"white",color:"grey-7"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(e.menu.value.name),1),(0,l.Wm)(I,{square:""},{default:(0,l.w5)((()=>[(0,l.Wm)($,{separator:""},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(D,{clickable:"",active:"Dubai"==e.menu.value.name,onClick:t[0]||(t[0]=t=>e.select({name:"Dubai",code:"demo"}))},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[u])),_:1})])),_:1})])),_:1},8,["active"]),[[E]]),(0,l.wy)((0,l.Wm)(D,{clickable:"",active:"AbuDhabi"==e.menu.value.name,onClick:t[1]||(t[1]=t=>e.select({name:"AbuDhabi",code:"DEV"}))},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[m])),_:1})])),_:1})])),_:1},8,["active"]),[[E]])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)($,{dark:""},{default:(0,l.w5)((()=>[(0,l.Wm)(D,{clickable:"",to:"/pick","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"shopping_basket"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[p])),_:1})])),_:1}),(0,l.Wm)(N,{class:"q-my-none",spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/pack","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"inventory_2"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[b])),_:1})])),_:1}),(0,l.Wm)(N,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/ride","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"local_shipping"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[h])),_:1})])),_:1}),(0,l.Wm)(N,{class:"q-my-sm"}),(0,l.Wm)(D,{clickable:"",to:"/dashboard","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"tv"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[k])),_:1})])),_:1}),(0,l.Wm)(N,{class:"q-my-sm"}),(0,l.Wm)(D,{clickable:"",to:"/reports",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"show_chart"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[w])),_:1})])),_:1}),(0,l.Wm)(N,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/settings",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"settings"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[g])),_:1})])),_:1}),(0,l.Wm)(N,{spaced:"0",inset:"item",dark:""}),(0,l.Wm)(D,{clickable:"",to:"/manual",disabled:"","active-class":"bg-indigo-8"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"q-ml-md",avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{name:"contact_support"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[y])),_:1})])),_:1})])),_:1})])),_:1})]),(0,l._)("div",f,[_,(0,l._)("div",W,[v,(0,l._)("span",x,(0,s.zw)(e.$version),1)])])])}var T=a(1959),q=a(7581);const Z=(0,l.aZ)({name:"Menu",setup(){const e=(0,T.qj)({value:{name:"Dubai",code:"demo"}});return{menu:e,select(t){q.W.location=t.code,e.value=t}}}});var D=a(7011),$=a(3414),I=a(2035),Q=a(2350),S=a(9721),N=a(7030),E=a(6335),U=a(5869),V=a(4554),P=a(677),L=a(7518),A=a.n(L);Z.render=C;const R=Z;function K(e,t,a,s,o,n){const r=(0,l.up)("q-route-tab"),i=(0,l.up)("q-tabs");return(0,l.wg)(),(0,l.j4)(i,{class:"my-tabs",modelValue:o.tabs,"onUpdate:modelValue":t[0]||(t[0]=e=>o.tabs=e),stretch:"",Zalign:"justify","no-caps":"","active-color":"primary","switch-indicator":"","indicator-color":"transparent"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"home",icon:"shopping_basket",label:"Pick",to:"/pick"}),(0,l.Wm)(r,{name:"alarms",icon:"inventory_2",label:"Pack",to:"/pack"}),(0,l.Wm)(r,{name:"auto",icon:"local_shipping",to:"/ride",label:"Ride"})])),_:1},8,["modelValue"])}A()(Z,"components",{QList:D.Z,QItem:$.Z,QItemSection:I.Z,QItemLabel:Q.Z,QBadge:S.Z,QChip:N.Z,QMenu:E.Z,QSeparator:U.Z,QIcon:V.Z}),A()(Z,"directives",{ClosePopup:P.Z});const O={name:"Nav",components:{},data(){return{tabs:"home"}},computed:{},created(){},methods:{}};var M=a(2496),H=a(2770),B=a(8240),j=a(8408),G=a(1007);O.render=K;const z=O;A()(O,"components",{QTabs:M.Z,QRouteTab:H.Z,QBtn:B.Z,QTab:j.Z,QPageSticky:G.Z});const F={class:"keyboard"};function J(e,t,a,o,n,r){return(0,l.wg)(),(0,l.iD)("div",F,(0,s.zw)(n.keyText),1)}var X;a(5474);const Y={name:"Keyboard",data(){return{keyText:""}},created(){window.addEventListener("keydown",this.documentKeydown)},beforeUnmount(){window.removeEventListener("keydown",this.documentKeydown)},methods:{documentKeydown(e){if(!(e.target.className.indexOf("nokeyboard")>=0)){if(e.keyCode>=96&&e.keyCode<=105?this.keyText+=String.fromCharCode(e.keyCode-48):e.keyCode>=65&&e.keyCode<=90?this.keyText+=String.fromCharCode(e.keyCode+(e.shiftKey?0:32)):e.keyCode>=48&&e.keyCode<=57?this.keyText+=String.fromCharCode(e.keyCode):110!=e.keyCode&&190!=e.keyCode||(this.keyText+="."),8==e.keyCode&&(this.keyText=this.keyText.slice(0,-1)),13==e.keyCode){var t=this.keyText.substr(0,1);t=this.keyText.substr(0,1),13==this.keyText.length?console.debug("emitting 13 len key text",this.keyText):(console.debug("emitting POIP",t,this.keyText.slice(1)),this.$bus.$emit("keyboard:keydown:enter:"+t,this.keyText.slice(1))),""!=this.keyText&&(this.$bus.$emit("keyboard:keydown:enter:"+this.keyText.length,this.keyText),this.$bus.$emit("keyboard:keydown:enter",this.keyText),this.keyText="",e.preventDefault())}window.clearTimeout(X),X=window.setTimeout((()=>{this.keyText=""}),1e3)}}}};Y.render=J;const ee=Y,te=(0,l.aZ)({name:"AppLayout",components:{Menu:R,Nav:z,Keyboard:ee},setup(){const e=(0,T.iH)(!1),t=(0,T.iH)(null);return{bar:t,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},resetScroll(e,t){document.documentElement.scrollTop=0,document.body.scrollTop=0,t()}}}});var ae=a(3066),le=a(3812),se=a(9570),oe=a(3747),ne=a(614),re=a(2901),ie=a(2652),de=a(1762);te.render=n;const ce=te;A()(te,"components",{QLayout:ae.Z,QHeader:le.Z,QToolbar:se.Z,QToolbarTitle:oe.Z,QAjaxBar:ne.Z,QDrawer:re.Z,QPageContainer:ie.Z,QFooter:de.Z,QSeparator:U.Z})}}]);