<template lang="pug">
layout
  template(v-slot:header) Pick
  template(v-slot:list)
    q-separator
    orderHistory(:hist="order")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      q-dialog(v-model="showPrintDialog" size="lg")
        q-card.full-width.q-pa-lg.Zno-border-radius.no-box-shadow
          print(ref="printRef" :data="order")
          q-card-actions
            r-btn(Zclick="printRef.print" text-color="primary" outline) Print

      r-card
        q-card-section
          InputLabel(label="Tracking Number" v-model="trackingNumber" length="9")
        q-card-section.q-pa-none.q-pl-xs
          q-checkbox(v-model="useLabel" @click="labelNumber = ''") Use Label
        q-slide-transition
          q-card-section(v-show="useLabel")
            InputLabel(label="Label Number" type="barcode" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="pick" :disabled="!trackingNumber") Pick

      
</template>

<script>

import layout from 'layouts/AppLayout.vue'
import orderHistory from 'components/OrderHistory.vue'

import InputLabel from 'components/InputLabel.vue'
import print from 'components/Print.vue'

import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'

export default defineComponent({
  name: 'Pick',

  components: {
    layout,
    print,
    orderHistory,
    InputLabel
  },

  data(){
    return {
      useLabel:false,
      labelNumber:null,
      trackingNumber:null,
      showPrintDialog:false,
      order:null,
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
    clear(){
      this.labelNumber = null;
      this.trackingNumber = null;
      this.useLabel = false
    },
    pick () {
      //labelNumber,trackingNumber
      $api.pick(this.labelNumber,this.trackingNumber).then((resp)=>{
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
