<template lang="pug">
q-page.q-pa-lg.flex.flex-center
  .q-gutter-y-md.full-width
    q-card.q-pa-md.full-width.shadow-light
      q-card-section.q-pt-none.q-gutter-md
        q-input(label="Order ID" @dblclick="orderNum = '583039600'" v-model="orderNum" :rules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" 
)
          template(v-slot:append)
            q-btn(round dense flat icon="camera_alt")
      //- q-separator
      q-card-actions
        r-btn(@click="pick") Pick

    q-card.q-pa-md.full-width.shadow-light
      q-card-section.q-pt-xs
        .row.no-wrap.items-center.text-grey
          .col.ellipsis Order 
          .col-auto.text-caption {{order.date}}
        .text-h4.text-weight-bold #
          | {{order.id}}
        .barcode {{encode(order.id)}}
      q-card-actions
        r-btn(@click="print") Print
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

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
      },
      print(){
        console.log('Printing');
        $q.notify({
          message: 'Printed',
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
