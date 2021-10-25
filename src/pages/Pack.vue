<template lang="pug">
layout
  template(v-slot:header) Pack
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          InputLabel(label="Label Number" v-model="labelNumber" type="barcode" length="2")
        q-card-actions
          r-btn(@click="pack" text-color="primary" outline :disabled="!labelNumber") Info

      q-slide-transition
        r-card(v-show="labelNumber")
          q-card-section
            InputLabel(label="Cell Number" v-model="cell" length="11" type="barcode" defaultValue="CELL-DEV-01")
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
    
    function clear(){
      cell.value = '';
      labelNumber.value = '';
      
    }

    return {
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
    }
  },
})
</script>

<style lang="sass" scoped>

</style>
