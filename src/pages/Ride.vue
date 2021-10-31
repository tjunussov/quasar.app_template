<template lang="pug">
layout.max-width  
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
          InputScan(label="Label Number" type="barcode" prefix="L" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="ride" :disabled="!labelNumber") Ride
          
</template>

<script>

import InputScan from 'src/components/InputScan.vue'
import layout from 'layouts/AppLayout.vue'
import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'
import { Dialog } from 'boot/dialog'

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
        if(!resp.waiting){
          Dialog.create({
              type: 'Cell '+resp.cellCode,
              color: 'positive',
              message: `Order #${resp.trackingNumber} ready for pickup`,
              title: 'Pickup Ready',
              timeout:10000,
              details: `Pick order from <b>${resp.cellCode}</b>`
          })
        } else {
          Dialog.create({
              type: 'Please Wait',
              color: 'primary',
              message: resp.result,
              title: 'Ride',
              timeout:2000,
              details: 'Status <b>'+resp.status + '</b>'
          });
        }

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
