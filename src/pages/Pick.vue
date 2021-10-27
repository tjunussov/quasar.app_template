<template lang="pug">
layout
  template(v-slot:header) Pick
  template(v-slot:list)
    orderHistory(:hist="order" @open="recover" @clear="order = null")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      q-dialog(v-model="showPrintDialog" size="lg")
        q-card.full-width.q-pa-lg.Zno-border-radius.no-box-shadow
          print(ref="printRef" :data="order")
          //- q-card-actions
            r-btn(@click="printRef.print" text-color="primary" outline) Print

      r-card
        q-card-section
          InputScan(label="Tracking Number" type="ocr" extract="ocr_picker" v-model="trackingNumber" length="9" @data="multiData")
        q-card-section.q-pa-none.q-pl-xs
          q-checkbox(@update:modelValue="useLabel = $event; labelNumber = null" :modelValue="useLabel || labelNumber!=null") Use Label
        q-slide-transition
          q-card-section(v-show="labelNumber || useLabel")
            InputScan(label="Label Number" type="barcode" v-model="labelNumber" prefix="l" length="4")
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
    InputScan
  },

  data(){
    return {
      useLabel:false,
      labelNumber:null,
      trackingNumber:null,
      showPrintDialog:false,
      order:null,
      raw:null,
    }
  },
  watch:{
    showPrintDialog(v){
      if(v) window.setTimeout(()=>{
        this.showPrintDialog = false
      },4000)
    }
  },
    
  methods:{
    recover(order){
      this.labelNumber = order.labelNumber;
      this.trackingNumber = order.trackingNumber;
      this.order = null;
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
      $api.pick(this.labelNumber,this.trackingNumber,this.raw).then((resp)=>{
        this.showPrintDialog = true;
        this.order = resp;
        this.clear();
      });
    },
  }
})
</script>

<style lang="sass" scoped>

</style>
