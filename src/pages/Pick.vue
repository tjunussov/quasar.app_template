<template lang="pug">
layout.max-width
  template(v-slot:header) Pick
  template(v-slot:list)
    orderHistory(:hist="hist" @open="recover" @clear="hist = null")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      r-dialog(v-model="showPrintDialog" @hide="clear" title="Print Label" :message="printerData?printerData.result:''" :timeout="5000" @timeout="print")
        template(v-slot:footer): r-btn(@click="print" text-color="primary" outline) Print 
        template(v-slot:details) 
          q-item-label Status 
            span.text-weight-bold {{printerData?printerData.status:''}}
        print(ref="printRef" :data="printerData")
          

      r-card
        q-card-section
          InputScan(label="Tracking Number" type="ocr" extract="ocr_picker" v-model="trackingNumber" length="9" @data="multiData")
        q-card-section.q-pa-none.q-pl-xs
          q-checkbox(@update:modelValue="useLabel = $event; labelNumber = null" :modelValue="useLabel || labelNumber!=null") Use Label
        q-slide-transition
          q-card-section(v-show="labelNumber || useLabel")
            InputScan(label="Label Number" type="barcode" v-model="labelNumber" prefix="L" length="4")
        q-card-actions
          r-btn(@click="pick" :disabled="!trackingNumber") Pick

      
</template>

<script>

import layout from 'layouts/AppLayout.vue'
import orderHistory from 'components/OrderHistory.vue'

import InputScan from 'src/components/InputScan.vue'
import print from 'components/Print.vue'

import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'

import { Dialog } from 'boot/dialog'

export default defineComponent({
  name: 'Pick',

  components: {
    layout,
    print,
    orderHistory,
    InputScan,
  },
  created(){
    var p = localStorage.getItem('printer');
    if(p !== null) {
      this.$root.selectedPrinter = this.selectedPrinter = JSON.parse(p);
    }
  },
  watch:{
    useLabel(v){
      if(v) localStorage.setItem('useLabel',v)
      else localStorage.removeItem('useLabel')
    }
  },
  data(){
    return {
      useLabel:(localStorage.getItem('useLabel')!==null),
      labelNumber:null,
      trackingNumber:null,
      showPrintDialog:false,
      printerData:null,
      hist:null,
      raw:null,
    }
  },  
  methods:{
    recover(hist){
      this.labelNumber = hist.labelNumber;
      this.trackingNumber = hist.trackingNumber;
      this.hist = null;
    },
    clear(){
      this.labelNumber = null;
      this.trackingNumber = null;
    },
    multiData(p){
      this.raw = p.raw
    },
    pick () {
      //labelNumber,trackingNumber
      return $api.pick(this.labelNumber,this.trackingNumber,this.raw).then((resp)=>{

        this.printerData = this.hist = resp;
        
        if(this.useLabel || !this.$root.selectedPrinter){
          Dialog.create({
              type: 'Picked',
              color: 'primary',
              message: resp.result,
              title: 'Pick',
              timeout: 2000,
              details: `Status <b>${resp.status}</b>`
          });
          this.clear();
        } else {
          this.showPrintDialog = true;
        }
        
      });
    },
    print(){
      this.$refs.printRef.print().then(()=>{
        this.showPrintDialog = false;
        this.printerData = null;
      })
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
