<template lang="pug">
layout.max-width
  template(v-slot:header) Home
  //- template(v-slot:header-right)
    //- q-btn(@click="showPrintDialog = true" icon="test")
  //- template(v-slot:list)
  q-page.q-px-lg.q-pb-lg.flex.flex-center(:class="{'q-pt-lg':!ui.lock,'q-pb-xl':ui.lock}")
    .q-gutter-y-md.full-width

      r-card
        q-card-section
          q-input(label="Test" v-model="data")
        q-card-actions
          r-btn Button
          
</template>

<script>


import layout from 'layouts/AppLayout.vue'
import { $api } from '@/store/services/api'

import { Dialog } from 'boot/dialog'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  meta: {
    title: 'Home',
  },
  components: {
    layout,
  },
  computed: {
    ...mapGetters(['ui']),
  },
  data(){
    return {
      data:null,
      error:null,
    }
  },  
  methods:{
    clear(){
      this.data = null;
    },
    test () {
      $api.test(this.data).then((resp)=>{
          Dialog.create({
              type: 'Picked',
              color: 'primary',
              message: resp.result,
              resp,
              title: 'Pick',
              details: `Status <b>${resp.status}</b>`
          })
      }).catch((e)=>{
        this.error = e;
      }).finally(()=>{
        this.clear();
      });
    },
  },
}
</script>

<style lang="sass" scoped>


</style>
