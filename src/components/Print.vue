<template lang="pug">
div
  q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
    .col.ellipsis {{order.trackingNumber}} 
    .col-auto.text-caption {{order.date}}
  q-card-section.q-pt-xs.text-center
    .barcode {{encode(order.labelNumber||order.trackingNumber)}}
    .text-h5.text-weight-bold #
      | {{order.labelNumber||order.trackingNumber}}
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import $cordovaApi from '../store/services/cordova'


import Encoder from 'code-128-encoder'
var code128= new Encoder()

export default defineComponent({
  name: 'Print',

  components: {
    
  },

  setup (props) {
    const $q = useQuasar()
    const order = reactive({
      labelNumber: '123',
      trackingNumber: '123',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })

    return {
      order,
      print(){
        console.log('Printing');
        
        $q.notify({
          spinner: true,
          timeout: 1000,
          position: 'top',
          message: 'Printing Label',
          color: 'primary'
        })
        
        $cordovaApi.printLabel();
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
