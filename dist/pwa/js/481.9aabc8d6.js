"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[481],{6481:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(3673),n=a(2323),i=a(8880);const r=(0,s.Uk)("Dashboard"),l={key:0,class:"col q-pl-xs q-gutter-xs"},u=(0,s._)("div",{class:"q-mt-md"},"No rider is waiting ... ",-1);function o(e,t,a,o,c,d){const m=(0,s.up)("r-btn"),p=(0,s.up)("r-empty"),g=(0,s.up)("q-tab"),w=(0,s.up)("q-tabs"),h=(0,s.up)("ticket"),b=(0,s.up)("q-page"),k=(0,s.up)("q-icon"),f=(0,s.up)("q-item-label"),q=(0,s.up)("layout");return(0,s.wg)(),(0,s.j4)(q,{dark:""},{header:(0,s.w5)((()=>[r])),"header-right":(0,s.w5)((()=>[(0,s.Wm)(m,{icon:"volume_up",onClick:t[0]||(t[0]=e=>d.say("1 2 3 4","pick from box 3"))})])),footer:(0,s.w5)((()=>[(0,s.Wm)(p)])),default:(0,s.w5)((()=>[c.queue.length?((0,s.wg)(),(0,s.j4)(b,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{align:"justify"},{default:(0,s.w5)((()=>[d.isWait?((0,s.wg)(),(0,s.j4)(g,{key:0,label:"Waiting"})):(0,s.kq)("",!0),(0,s.Wm)(g,{label:"Done"})])),_:1}),(0,s._)("div",{class:(0,n.C_)(["row",{blink:c.blink}])},[d.isWait?((0,s.wg)(),(0,s.iD)("div",l,[(0,s.Wm)(i.W3,{appear:"","enter-active-class":"animated slideInDown","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.waitQueue,(e=>((0,s.wg)(),(0,s.j4)(h,{class:"bg-primary",key:e.trackingNumber,t:e},null,8,["t"])))),128))])),_:1})])):(0,s.kq)("",!0),(0,s._)("div",{class:(0,n.C_)(["col q-px-xs q-gutter-xs",{"grid-container":!d.isWait}])},[(0,s.Wm)(i.W3,{appear:"","enter-active-class":"animated slideInDown","leave-active-class":"animated fadeOut"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.doneQueue,(e=>((0,s.wg)(),(0,s.j4)(h,{class:"bg-dark",key:e.trackingNumber,t:e},null,8,["t"])))),128))])),_:1})],2)],2)])),_:1})):((0,s.wg)(),(0,s.j4)(b,{key:1,class:"flex flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{class:"text-h6 text-weight-bold text-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{name:"mood",size:"65px"}),u])),_:1})])),_:1}))])),_:1})}var c=a(7581),d=a(5724),m=a(3427);const p={class:"text-grey-8"},g={class:"text-weight-bold q-ml-xs"},w={color:"black","text-color":"white",outline:"",dense:"",size:"lg"};function h(e,t,a,i,r,l){const u=(0,s.up)("q-item-label"),o=(0,s.up)("q-icon"),c=(0,s.up)("q-item-section"),d=(0,s.up)("q-item");return(0,s.wg)(),(0,s.j4)(d,{class:"ticket no-border-radius q-pa-none",unelevated:"",Zoutline:""},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"q-pa-md q-px-md",avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"text-h5"},{default:(0,s.w5)((()=>[(0,s._)("span",p,(0,n.zw)(String(a.t.trackingNumber).substr(0,String(a.t.trackingNumber).length-4)),1),(0,s._)("span",g,(0,n.zw)(String(a.t.trackingNumber).substr(-4)),1)])),_:1}),(0,s.Wm)(u,{class:"text-grey-6 text-small"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"schedule"}),(0,s.Uk)((0,n.zw)(e.$format(a.t.created,"HH:mm")),1)])),_:1})])),_:1}),(0,s.Wm)(c),(0,s.Wm)(c,{class:"bg-grey-9 q-pl-none",side:"",Ztop:""},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{class:"text-h6 q-pr-lg"},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{class:"ticket-arrow",name:"arrow_right",size:"54px"}),(0,s._)("span",w,(0,n.zw)(a.t.cellCode?a.t.cellCode:"WAIT..."),1)])),_:1})])),_:1})])),_:1})}const b={name:"DashboardTicket",props:["t"]};var k=a(3414),f=a(2035),q=a(2350),_=a(7030),W=a(4554),x=a(7518),v=a.n(x);b.render=h;const y=b;v()(b,"components",{QItem:k.Z,QItemSection:f.Z,QItemLabel:q.Z,QChip:_.Z,QIcon:W.Z});let Q=null;const Z={name:"Dashboard",data(){return{blink:!1,optionsVoice:[],nospeak:!0,queue:[]}},computed:{isWait(){return this.waitQueue.length>0},doneQueue(){return this.queue.filter((e=>!e.waiting))},waitQueue(){return this.queue.filter((e=>e.waiting))}},created(){this.dash(),this.$q.dark.set(!0),Q=window.setInterval(this.dash,5e3)},beforeUnmount(){console.debug("beforeDestroy",Q),this.$q.dark.set(!1),window.clearInterval(Q)},components:{layout:m.Z,ticket:y},methods:{dash(){this.blink=!0,c.W.dashboard().then((e=>{this.processSound(e),this.blink=!1,this.queue=e.data}))},processSound(e){if(I(this.queue,e.data))if(this.queue.length>e.data.length)d.T.dequeue();else{var t=e.data[0];t&&this.nospeak&&!t.waiting&&this.say(t.trackingNumber||t.referenceNumber,"pick from box "+t.cellCode).then((()=>{this.nospeak=!0})),d.T.enqueue()}},say(e,t){return this.$speechTalk(`Order number ${String(e).substr(-4).split("").join(" ")} ${t}`)}}};function I(e,t){return JSON.stringify(e)!=JSON.stringify(t)}var D=a(4379),N=a(2496),j=a(8408);Z.render=o;const C=Z;v()(Z,"components",{QPage:D.Z,QTabs:N.Z,QTab:j.Z,QItemLabel:q.Z,QIcon:W.Z})}}]);