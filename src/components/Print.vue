<template lang="pug">
.check.q-ma-lg.bg-white(v-if="data")
  q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
    .col.ellipsis {{data.trackingNumber}} 
    .col-auto.text-caption {{$format(data.created,'DD.MM.YYYY  HH:mm:ss')}}
  q-card-section.q-pt-xs.text-center
    .barcode {{encode(data.labelNumber||data.trackingNumber)}}
    .text-h5.text-weight-bold \#{{data.labelNumber||data.trackingNumber}}
  pre#printSection.hidden
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
  props:{
    'data':{
      type:Object,
      default:{
        trackingNumber:'1111',
        created:new Date(),
      }
    }
  },
  methods:{
    print(){
      
      this.$q.notify({
        spinner: true,
        timeout: 1000,
        position: 'top',
        message: 'Printing Label',
        color: 'primary'
      })

      if(this.data){
        var text = document.getElementById('printSection').innerText;
        console.debug('Printing',text);
        return $cordovaApi.printLabel(text);
      }
    },
    encode(val){
      return code128.encode(val)
    },
  }
})
</script>

<style scoped>
.check { 
  box-shadow: 0 15px 15px rgba(0,0,0,0.2);
  position: relative;
  border-radius: 5px 5px 0 0;
}
 /* torn edges */
/*.check:after,*/ 
.check:before {
    content: "";
    display: block;
    position: absolute;
    
    left:0;
    right:0;
    height: 5px;
    z-index: 10;
    /* TODO Add browser prefixes */
    /*background: linear-gradient(-45deg, #f7f7f7 16px, transparent 0), linear-gradient(45deg, #f7f7f7 16px, transparent 0);*/
    background:
    linear-gradient(
      45deg, transparent 33.333%,
      #fff 33.333%, #fff 66.667%,
      transparent 66.667%
    ),
    linear-gradient(
      -45deg, transparent 33.333%,
      #fff 33.333%, #fff 66.667%,
      transparent 66.667%
    );
    background-size: 5px 10px;
    background-position: 0 -5px;
}
/*
.check:after {
    top: -10px;
    transform:rotate(180deg);
}*/

.check:before {
    bottom: -5px;
}

</style>
