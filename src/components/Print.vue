<template lang="pug">
q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
  .col.ellipsis {{data.trackingNumber}} 
  .col-auto.text-caption {{data.created}}
q-card-section.q-pt-xs.text-center
  .barcode {{encode(data.labelNumber||data.trackingNumber)}}
  .text-h5.text-weight-bold \#{{data.labelNumber||data.trackingNumber}}
pre#printSection.hidden(v-if="data")
  | N
  | q720
  | j555
  | l8,C,001
  | X0,40,4,710,640
  | 
  | A20,210,0,4,1,1,N,""
  | 
  | B20,240,0,1,2,2,100,B,"{{data.labelNumber||data.trackingNumber}}"
  | 
  | A20,480,0,4,1,1,N,"COTPYDHNK"
  | A300,480,0,4,1,1,N,"{{data.created}}"
  | A380,480,0,4,1,1,N,"_______________"
  | 
  | A20,510,0,1,1,1,N,"© 2018 Powered by Toolpar, Tastamat Instore"
  | P1
  | N
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

      var text = document.getElementById('printSection').innerText;
      $cordovaApi.printLabel(text);
    },
    encode(val){
      return code128.encode(val)
    },
  }
})
</script>

<style lang="sass" scoped>

</style>
