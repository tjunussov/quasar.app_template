<template lang="pug">
q-page.q-pa-lg.flex.flex-center
  .q-gutter-y-md.full-width
    r-card
      q-card-section.q-pt-none.q-gutter-md
        q-input(label="Label No" @dblclick="labelNumber = '583039600'" v-model="labelNumber" :rules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" )
          template(v-slot:append)
            r-btn(icon="camera_alt" color="grey" @click="scan")
        q-input(label="Tracking No" @dblclick="trackingNumber = '#3918'" v-model="trackingNumber" :rules="[ val => val.length >= 4 || 'Please use minimum 4 characters' ]" )
        
      //- q-separator
      q-card-actions
        r-btn(@click="pick" :disabled="!labelNumber") Pick

    r-card
      q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
        .col.ellipsis {{order.trackingNumber}} 
        .col-auto.text-caption {{order.date}}
      q-card-section.q-pt-xs.text-center
        .barcode {{encode(order.labelNumber)}}
        .text-h5.text-weight-bold #
          | {{order.labelNumber}}
      q-card-actions
        r-btn(@click="print") Print
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'

import Encoder from 'code-128-encoder'
var code128= new Encoder()

export default defineComponent({
  name: 'Pick',

  components: {
  },

  setup () {
    const $q = useQuasar()
    const labelNumber = ref('')
    const trackingNumber = ref('')
    const order = reactive({
      labelNumber: '583039599',
      trackingNumber: '#3918',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })

    return {
      labelNumber,
      trackingNumber,
      order,
      pick () {
        order.labelNumber = labelNumber.value
        order.trackingNumber = trackingNumber.value
        //labelNumber,trackingNumber
        $api.pick(order.labelNumber,order.trackingNumber).then((resp)=>{
          console.debug('$api.pick',order.labelNumber,'resp->',resp.data);
          $q.notify({ type: 'info',color: 'primary',message: resp.data.result })
        });
      },
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          labelNumber.value = '583039599'
          trackingNumber.value = '3918'
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
