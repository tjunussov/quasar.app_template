"use strict";(self["webpackChunkinstore_tastamat_com"]=self["webpackChunkinstore_tastamat_com"]||[]).push([[375],{9378:(l,e,a)=>{a.r(e),a.d(e,{default:()=>W});var t=a(3673),u=a(8880);const n=(0,t.Uk)("Pack"),c={class:"q-gutter-y-md full-width"},d=(0,t.Uk)("Info"),r=(0,t.Uk)("Pack");function o(l,e,a,o,m,s){const i=(0,t.up)("InputScan"),b=(0,t.up)("q-card-section"),p=(0,t.up)("r-btn"),f=(0,t.up)("q-card-actions"),k=(0,t.up)("r-card"),w=(0,t.up)("q-slide-transition"),_=(0,t.up)("q-page"),h=(0,t.up)("layout");return(0,t.wg)(),(0,t.j4)(h,{class:"max-width"},{header:(0,t.w5)((()=>[n])),default:(0,t.w5)((()=>[(0,t.Wm)(_,{class:"q-pa-lg flex flex-center"},{default:(0,t.w5)((()=>[(0,t._)("div",c,[(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{label:"Label Number",modelValue:l.labelNumber,"onUpdate:modelValue":e[0]||(e[0]=e=>l.labelNumber=e),type:"barcode",prefix:"L",length:"2"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:l.pack,"text-color":"primary",outline:"",disabled:!l.labelNumber},{default:(0,t.w5)((()=>[d])),_:1},8,["onClick","disabled"])])),_:1})])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{label:"Cell Number",modelValue:l.cell,"onUpdate:modelValue":e[1]||(e[1]=e=>l.cell=e),length:"3",type:"barcode",prefix:"C",defaultValue:"CELL-DEV-01"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:l.pack,disabled:!l.cell||!l.labelNumber},{default:(0,t.w5)((()=>[r])),_:1},8,["onClick","disabled"])])),_:1})])),_:1},512),[[u.F8,l.labelNumber]])])),_:1})])])),_:1})])),_:1})}var m=a(6918),s=a(7581),i=a(4808);const b=(0,t.aZ)({name:"Pack",components:{layout:i.Z,InputScan:m.Z},data(){return{labelNumber:null,cell:null}},methods:{pack(){s.W.pack(this.labelNumber,this.cell).then((l=>{this.clear()}))},clear(){this.cell="",this.labelNumber=""}}});var p=a(4379),f=a(5589),k=a(9367),w=a(2471),_=a(7518),h=a.n(_);b.render=o;const W=b;h()(b,"components",{QPage:p.Z,QCardSection:f.Z,QCardActions:k.Z,QSlideTransition:w.Z})}}]);