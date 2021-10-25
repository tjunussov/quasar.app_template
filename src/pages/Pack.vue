<template lang="pug">
layout
  template(v-slot:header) Pack
  q-page.q-pa-lg.flex.flex-center
    .q-gutter-y-md.full-width
      r-card
        q-card-section
          InputScan(label="Label Number" v-model="labelNumber" type="barcode" length="2")
        q-card-actions
          r-btn(@click="pack" text-color="primary" outline :disabled="!labelNumber") Info

      q-slide-transition
        r-card(v-show="labelNumber")
          q-card-section
            InputScan(label="Cell Number" v-model="cell" length="11" type="barcode" defaultValue="CELL-DEV-01")
          q-card-actions
            r-btn(@click="pack" :disabled="!cell || !labelNumber") Pack
</template>

<script>

import InputScan from 'src/components/InputScan.vue'
import { defineComponent, ref, reactive } from 'vue'
import { $api } from '../store/services/api'
import layout from 'layouts/AppLayout.vue'

export default defineComponent({
  name: 'Pack',

  components: {
    layout,
    InputScan
  },
  data(){
    return {
      labelNumber:null,
      cell:null,
    }
  },
  methods:{
    pack () {
      // labelNumber,cell
      $api.pack(this.labelNumber,this.cell).then((resp)=>{
        this.clear();
      });
    },
    clear(){
      this.cell = '';
      this.labelNumber = '';
    }
  },
})
</script>

<style lang="sass" scoped>

</style>
