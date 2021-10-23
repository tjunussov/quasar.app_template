<template lang="pug">
q-page.q-pa-lg.flex.flex-center
  .full-width
    
    r-card.q-mt-md
      q-card-section.q-pt-none.q-gutter-md
        q-input(label="Order ID" @dblclick="orderNum = '583039600'" v-model="orderNum" :rules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" )
          template(v-slot:append)
            r-btn(icon="camera_alt" color="grey" @click="scan")
      //- q-separator
      q-card-actions(vertical)
        r-btn(@click="riderCheckIn" :disabled="!orderNum") Check In
        r-btn(@click="ride" :disabled="!orderNum") Ride
        
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'

import Encoder from 'code-128-encoder'
var code128= new Encoder()

export default defineComponent({
  name: 'Ride',

  components: {
  },

  setup () {
    const $q = useQuasar()
    const orderNum = ref('')
    const order = reactive({
      id: '583039599',
      key: '#3918',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })

    return {
      orderNum,
      order,
      ride() {
        order.id = orderNum.value
        // labelNumber
        $api.ride(order.id).then((resp)=>{
          console.debug('$api.ride',order.id,'resp->',resp.data);
          $q.notify({ type: 'info',color: 'primary',message: resp.data.result })
        });
      },
      riderCheckIn() {
        order.id = orderNum.value
        // trackingNumber
        $api.riderCheckIn(order.id).then((resp)=>{
          console.debug('$api.riderCheckIn',order.id,'resp->',resp.data);
          $q.notify({ type: 'info',color: 'primary',message: resp.data.result })
        });
      },
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          orderNum.value = '583039599'
        })
      },
      print(){
        console.log('Printing');
        $q.notify({
          spinner: true,
          timeout: 1000,
          position: 'top',
          message: 'Printing Label',
          color: 'primary'
        })
      },
      encode(val){
        return code128.encode(val)
      },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
