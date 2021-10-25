<template lang="pug">
layout
  template(v-slot:header) Pick
  template(v-slot:list)
    q-separator
    orderHistory(:hist="hist")
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width

      q-dialog(v-model="showPrintDialog" size="lg")
        q-card.full-width.q-pa-lg.Zno-border-radius.no-box-shadow
          print(ref="printRef" :order="order")
          //- q-card-section.q-pt-xs.row.no-wrap.items-center.text-grey
          //-   .col.ellipsis {{trackingNumber}} 
          //-   .col-auto.text-caption {{order.date}}
          //- q-card-section.q-pt-xs.text-center
          //-   .barcode {{encode(labelNumber||trackingNumber)}}
          //-   .text-h5.text-weight-bold #
          //-     | {{labelNumber||trackingNumber}}
          q-card-actions
            r-btn(Zclick="printRef.print" text-color="primary" outline) Print

      r-card
        q-card-section
          InputLabel(label="Tracking Number" v-model="trackingNumber" length="9")
        q-card-section.q-pa-none.q-pl-xs
          q-checkbox(v-model="useLabel" @click="labelNumber = ''") Use Label
        q-slide-transition
          q-card-section(v-show="useLabel")
            InputLabel(label="Label Number" type="barcode" v-model="labelNumber" length="4")
        q-card-actions
          r-btn(@click="pick" :disabled="!trackingNumber") Pick

      
</template>

<script>

import layout from 'layouts/AppLayout.vue'
import orderHistory from 'components/OrderHistory.vue'

import InputLabel from 'components/InputLabel.vue'
import print from 'components/Print.vue'

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'
import { $sound } from '../store/services/sound'

export default defineComponent({
  name: 'Pick',

  components: {
    layout,
    print,
    orderHistory,
    InputLabel
  },

  data(){
    return {
      useLabel:false,
      
    }
  },
  watch:{
    showPrintDialog(v){
      if(v) window.setTimeout(()=>{
        this.showPrintDialog = false
      },4000)
    }
  },
  setup () {
    const $q = useQuasar()
    const labelNumber = ref(null)
    const trackingNumber = ref('')
    const printRef = ref(null)
    const showPrintDialog = ref(false);

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
      printRef,
      labelNumber,
      trackingNumber,
      showPrintDialog,
      order,
      hist,
      pick () {
        order.labelNumber = labelNumber.value
        order.trackingNumber = trackingNumber.value

        //labelNumber,trackingNumber
        $api.pick(labelNumber.value||trackingNumber.value,trackingNumber.value).then((resp)=>{
          console.debug('$api.pick',labelNumber.value,trackingNumber.value,'resp->',resp);
          $q.notify({ type: 'info',color: 'green',message: resp.result });
          showPrintDialog.value = true;
          localStorage.setItem('labelNumber',labelNumber.value);
          clear();
        });
      },
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          $sound.scan();
          trackingNumber.value = '583039599'
        })
      },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
