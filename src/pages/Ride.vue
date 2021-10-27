<template lang="pug">
layout
  template(v-slot:header) Ride
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          InputScan(label="Tracking Number" type="ocr" extract="ocr_rider" v-model="trackingNumber" length="9" @data="multiData")
          
        q-card-actions
          r-btn(@click="riderCheckIn" text-color="primary" outline :disabled="!trackingNumber") Check In        

      r-card
        q-card-section
          InputScan(label="Label Number" type="barcode" prefix="l" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="ride" :disabled="!labelNumber") Ride
          
</template>

<script>

import InputScan from 'src/components/InputScan.vue'
import layout from 'layouts/AppLayout.vue'
import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'

export default defineComponent({
  name: 'Ride',
  components: {
    layout,
    InputScan
  },
  data () {
    return {
      labelNumber:null,
      trackingNumber:null,
      raw:null,
    }
  },
  methods:{
    riderCheckIn() {
      // trackingNumber
      $api.riderCheckIn(this.trackingNumber,this.raw).then((resp)=>{
        this.clear();
      });
    },
    multiData(p){
      this.raw = p.raw
    },
    ride() {
      // labelNumber
      $api.ride(this.labelNumber).then((resp)=>{
        this.clear();
      });
    },
    clear(){
      this.labelNumber = null;
      this.trackingNumber = null
      localStorage.removeItem('Tracking Number');
      localStorage.removeItem('Label Number');
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
