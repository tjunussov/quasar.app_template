<template lang="pug">
q-page.q-pa-lg.flex.flex-center
  template(slot="header")
    q-separator
    q-list.text-primary
      q-item
        q-item-section
          q-item-label.text-h6.text-weight-bold The Fire Fisherman
          q-item-label(caption lines) Pick up by 19:30
        q-item-section(side top)
          r-btn(icon="more_horiz")
        q-item-section(side top)
          r-btn(icon="map")
  .q-gutter-y-md.full-width
    r-card
      q-card-section.q-pt-none.q-gutter-md
        q-input(label="Order ID" @dblclick="orderNum = '583039600'" v-model="orderNum" :rules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" )
          template(v-slot:append)
            r-btn(icon="camera_alt" color="grey" @click="scan")
      //- q-separator
      q-card-actions
        r-btn(@click="pick" :disabled="!orderNum") Pick

    r-card
      q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
        .col.ellipsis Order 
        .col-auto.text-caption {{order.date}}
      q-card-section.q-pt-xs.text-center
        .barcode {{encode(order.id)}}
        .text-h5.text-weight-bold #
          | {{order.id}}
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
      pick () {
        order.id = orderNum.value
        $api.pick(order.id,order.id).then((resp)=>{
          console.debug('$api.pick',order.id,'resp->',resp.data);
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
