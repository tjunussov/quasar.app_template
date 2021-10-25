<template lang="pug">
layout
  template(v-slot:header) Ride
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          InputScan(label="Tracking Number" v-model="trackingNumber" length="9")
        q-card-actions
          r-btn(@click="riderCheckIn" text-color="primary" outline :disabled="!trackingNumber") Check In

      r-card
        q-card-section
          InputScan(label="Label Number" type="barcode" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="ride" :disabled="!labelNumber") Ride
          
</template>

<script>

import InputScan from 'src/components/InputScan.vue'
import layout from 'layouts/AppLayout.vue'
import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
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
    }
  },
  methods:{
    riderCheckIn() {
      // trackingNumber
      $api.riderCheckIn(this.trackingNumber).then((resp)=>{
        this.clear();
      });
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
