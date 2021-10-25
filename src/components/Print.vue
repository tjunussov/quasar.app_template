<template lang="pug">
div
  q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
    .col.ellipsis {{data.trackingNumber}} 
    .col-auto.text-caption {{data.created}}
  q-card-section.q-pt-xs.text-center
    .barcode {{encode(data.labelNumber||data.trackingNumber)}}
    .text-h5.text-weight-bold \#{{data.labelNumber||data.trackingNumber}}
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import $cordovaApi from '../store/services/cordova'


import Encoder from 'code-128-encoder'
var code128= new Encoder()

export default defineComponent({
  name: 'Print',
  props:['data'],
  methods:{
    print(){
      console.debug('Printing');
      
      this.$q.notify({
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
})
</script>

<style lang="sass" scoped>

</style>
