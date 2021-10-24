<template lang="pug">
layout
  template(v-slot:header) Pick
  template(v-slot:list)
    q-separator
    orderHistory(:hist="hist")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      r-card(v-if="trackingNumber")
        q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
          .col.ellipsis {{trackingNumber}} 
          .col-auto.text-caption {{order.date}}
        q-card-section.q-pt-xs.text-center
          .barcode {{encode(labelNumber||trackingNumber)}}
          .text-h5.text-weight-bold #
            | {{labelNumber||trackingNumber}}
        q-card-actions
          r-btn(@click="print" text-color="primary" outline) Print

      r-card
        q-card-section.q-pt-none
          q-input(label="Tracking No" @dblclick="trackingNumber = '#3918'" v-model="trackingNumber" Zrules="[ val => val.length >= 4 || 'Please use minimum 4 characters' ]" )
            template(v-slot:append)
              r-btn(icon="camera_alt" color="grey" @click="scan")
        q-card-section.q-pa-none 
          q-checkbox(v-model="useLabel" @click="labelNumber = ''") Use Label

        q-card-section.q-pt-none.q-gutter-md(v-if="useLabel || labelNumber")
          q-input(label="Label No" @dblclick="labelNumber = '583039600'" v-model="labelNumber" Zrules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" )
            template(v-slot:append)
              r-btn(icon="camera_alt" color="grey" @click="scan")
        //- q-separator
        q-card-actions
          r-btn(@click="pick" :disabled="!trackingNumber") Pick

      
</template>

<script>

import layout from 'layouts/AppLayout.vue'
import orderHistory from 'components/OrderHistory.vue'

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'
import $cordovaApi from '../store/services/cordova'


import Encoder from 'code-128-encoder'
var code128= new Encoder()

export default defineComponent({
  name: 'Pick',

  components: {
    layout,
    orderHistory
  },

  data(){
    return {
      useLabel:false
    }
  },

  setup () {
    const $q = useQuasar()
    const labelNumber = ref(null)
    const trackingNumber = ref('')

    function clear(){
      labelNumber.value = null;
      trackingNumber.value = null;
    }
    
    
    const order = reactive({
      labelNumber: '',
      trackingNumber: '',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })
    var hist = reactive({});

    return {
      labelNumber,
      trackingNumber,
      order,
      hist,
      pick () {
        hist.labelNumber = labelNumber.value
        hist.trackingNumber = trackingNumber.value
        //labelNumber,trackingNumber
        // $cordovaApi.scanOCR();
        // $cordovaApi.scanOCR();
        $api.pick(labelNumber.value||trackingNumber.value,trackingNumber.value).then((resp)=>{
          console.debug('$api.pick',labelNumber.value,trackingNumber.value,'resp->',resp);
          $q.notify({ type: 'info',color: 'green',message: resp.result });
          clear();
        });
      },
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          trackingNumber.value = '583039599'
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
        
        window.setTimeout(window.print,500);
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
