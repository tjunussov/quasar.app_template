<template lang="pug">
layout
  template(v-slot:header) Ride
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          InputLabel(label="Tracking No" v-model="trackingNumber" length="9")
        q-card-actions
          r-btn(@click="riderCheckIn" text-color="primary" outline :disabled="!trackingNumber") Check In

      r-card
        q-card-section
          InputLabel(label="Label No" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="ride" :disabled="!labelNumber") Ride
          
</template>

<script>

import InputLabel from 'components/InputLabel.vue'
import layout from 'layouts/AppLayout.vue'
import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'

export default defineComponent({
  name: 'Ride',

  components: {
    layout,
    InputLabel
  },

  setup () {
    const $q = useQuasar()
    const labelNumber = ref('')
    const trackingNumber = ref('')
    const order = reactive({
      labelNumber: '583039599',
      trackingNumber: '#3918',
      key: '#3918',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })

    return {
      labelNumber,
      trackingNumber,
      order,
      riderCheckIn() {
        
        order.trackingNumber = trackingNumber.value
        // trackingNumber
        $api.riderCheckIn(order.trackingNumber).then((resp)=>{
          console.debug('$api.riderCheckIn',order.trackingNumber,'resp->',resp);
          $q.notify({ type: 'info',color: 'primary',message: resp.result })
        });
      },
      ride() {
        order.labelNumber = labelNumber.value
        // labelNumber
        $api.ride(order.labelNumber).then((resp)=>{
          console.debug('$api.ride',order.labelNumber,'resp->',resp);
          $q.notify({ type: 'info',color: 'primary',message: resp.result })
          localStorage.removeItem('labelNumber');
        });
      },
      // scanTrack(){
      //   $q.dialog({
      //     title: 'OCR Scaner',
      //     message: 'Please scan screen'
      //   }).onOk(()=>{
      //     trackingNumber.value = '583039599'
      //   })
      // },
      // scan(){
      //   $q.dialog({
      //     title: 'OCR Scaner',
      //     message: 'Please scan screen'
      //   }).onOk(()=>{
      //     labelNumber.value = '583039599'
      //   })
      // },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
