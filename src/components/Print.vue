<template lang="pug">
q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
  .col.ellipsis {{data.trackingNumber}} 
  .col-auto.text-caption {{$format(data.created,'DD.MM.YYYY  HH:mm:ss')}}
q-card-section.q-pt-xs.text-center
  .barcode {{encode(data.labelNumber||data.trackingNumber)}}
  .text-h5.text-weight-bold \#{{data.labelNumber||data.trackingNumber}}
pre#printSection.hidden(v-if="data")
  | ^XA
  | ^FO100,100^BY3
  | ^B1N,N,150,Y,N
  | ^FD\#{{data.labelNumber||data.trackingNumber}}^FS
  | ^XZ
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
      
      
      this.$q.notify({
        spinner: true,
        timeout: 1000,
        position: 'top',
        message: 'Printing Label',
        color: 'primary'
      })

      var text = document.getElementById('printSection').innerText;
      console.debug('Printing',text);
      return $cordovaApi.printLabel(text);
    },
    encode(val){
      return code128.encode(val)
    },
  }
})
</script>

<style lang="sass" scoped>

</style>
