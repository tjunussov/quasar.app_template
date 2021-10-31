<template lang="pug">
layout.max-width
  template(v-slot:header) Pick
  template(v-slot:list)
    orderHistory(:hist="hist" @open="recover" @clear="hist = null")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      r-dialog(v-model="showPrintDialog" title="Pick" :message="order?order.result:''" :timeout="10000" @timeout="print")
        template(v-slot:footer v-if="$root.selectedPrinter"): r-btn(@click="print" text-color="primary" outline) Print 
        template(v-slot:details) 
          q-item-label Status 
            span.text-weight-bold {{order?order.status:''}}
        print(ref="printRef" :data="order" v-if="$root.selectedPrinter")
          

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

export default defineComponent({
  name: 'Pick',

  components: {
    layout,
    print,
    orderHistory,
    InputScan,
  },

  data(){
    return {
      useLabel:false,
      labelNumber:null,
      trackingNumber:null,
      showPrintDialog:false,
      order:null,
      hist:null,
      raw:null,
    }
  },  
  methods:{
    recover(hist){
      this.labelNumber = hist.labelNumber;
      this.trackingNumber = hist.trackingNumber;
      this.order = hist;
      this.hist = null;
    },
    clear(){
      this.labelNumber = null;
      this.trackingNumber = null;
      this.useLabel = false
    },
    multiData(p){
      this.raw = p.raw
    },
    pick () {
      //labelNumber,trackingNumber
      return $api.pick(this.labelNumber,this.trackingNumber,this.raw).then((resp)=>{
        this.showPrintDialog = true;
        this.order = this.hist = resp;
        this.clear();
      });
    },
    print(){
      this.$refs.printRef.print().then(()=>{
        this.showPrintDialog = false;
        this.order = null;
      })
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
