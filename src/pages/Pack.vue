<template lang="pug">
layout
  template(v-slot:header) Pack
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          q-input(ref="inputRef" label="Label" @dblclick="labelNumber = '583039600'" v-model="labelNumber" Zrules="[ val => val.length >= 9 || 'Please use minimum 9 characters' ]" )
            template(v-slot:append)
              r-btn(icon="camera_alt" color="grey" @click="scan")
        q-card-actions
          r-btn(@click="pack" text-color="primary" outline :disabled="!labelNumber") Info

      q-slide-transition
        r-card(v-show="labelNumber")
          q-card-section
            q-input(label="Cell" @dblclick="cell = 'CELL-DEV-01'" v-model="cell" Zrules="[ val => val.length >= 1 || 'Please use minimum 9 characters' ]" )
              template(v-slot:append)
                r-btn(icon="camera_alt" color="grey" @click="scan")
          //- q-separator
          q-card-actions
            r-btn(@click="pack" :disabled="!cell || !labelNumber") Pack
</template>

<script>

import InputLabel from 'components/InputLabel.vue'
import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'
import layout from 'layouts/AppLayout.vue'

export default defineComponent({
  name: 'Pack',

  components: {
    layout,
    InputLabel
  },

  setup () {
    const $q = useQuasar()
    
    const labelNumber = ref('')
    const cell = ref('')
    const inputRef = ref(null)
    
    function clear(){
      cell.value = '';
      labelNumber.value = '';
      inputRef.value.resetValidation();
      
    }

    return {
      inputRef,
      labelNumber,
      cell,
      pack () {
        // labelNumber,cell
        $api.pack(labelNumber.value,cell.value).then((resp)=>{
          console.debug('$api.pack',labelNumber.value,cell.value,'resp->',resp);
          $q.notify({ type: 'info',color: 'primary',message: resp.result })
          clear();
        });
      },
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          labelNumber.value = (localStorage.getItem('labelNumber') !== null) ? localStorage.getItem('labelNumber') : Math.ceil(Math.random()*100000)
          localStorage.setItem('labelNumber',labelNumber.value)
          cell.value = 'CELL-DEV-01'
        })
      },
      
    }
  },
})
</script>

<style lang="sass" scoped>

</style>
