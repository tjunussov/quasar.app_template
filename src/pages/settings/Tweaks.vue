<template lang="pug">
layout.max-width
  template(v-slot:header-left): q-btn(icon="arrow_back_ios" flat dense no-caps color="primary" to="/settings")
  template(v-slot:header) Tweaks
  template(v-slot:header-right): r-empty
  template(v-slot:footer): r-empty
  q-page.q-py-lg

    .q-px-md.q-mt-md.text-grey.text-small 
    r-list(label="TIMEOUTS")
      r-item(v-for="(v,k) in timeouts" noside)
        template(v-slot:label)
          q-item-label.text-weight-bold {{k}}
          q-item-label.text-small.text-grey {{timeouts[k]/1000}} s
        q-slider(v-model="timeouts[k]"  :min="0" :max="20000" :step="1000" snap)

    r-list(label="DASHBOARD")
      r-item(label="Ready Color")
        r-color(v-model="dashboard.readyColor" dense borderless input-class="text-right")
      r-item(label="Wait Color")
        r-color(v-model="dashboard.waitColor" dense borderless input-class="text-right")
      r-item(noside)
        template(v-slot:label)
          q-item-label.text-weight-bold Due Duration
          q-item-label.text-small.text-grey {{dashboard.dueDuration}} m
        q-slider(v-model="dashboard.dueDuration" :min="1" :max="120" :step="1" snap)
        
</template>

<script>

import { soundList } from 'boot/sound'
import { colors } from "quasar";
import layout from 'layouts/AppLayout.vue'
import $cordovaApi from 'src/store/services/cordova'
import { $api } from '@/store/services/api'
import { mapXState, mapXGetters } from 'src/store'
import { mapState, mapGetters } from 'vuex' 

export default {
  name: 'Tweaks',
  meta: {
    title: 'Tweaks',
  },
  components: {
    layout,
  },
  computed: {
    ...mapXGetters([
        'ui','timeouts',
    ])
  },
  created(){
    
  },
  data(){
    return {
      soundList:soundList,
    }
  },
  methods:{
    setMock(){
      // colors.setBrand("primary", "red");
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
