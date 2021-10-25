<template lang="pug">
q-tabs.my-tabs(v-model="tabs" stretch Zalign="justify" no-caps active-color="primary" switch-indicator indicator-color="transparent")
  q-route-tab(name='home' icon='shopping_basket' label='Pick' to="/pick")
  q-route-tab(name='alarms' icon='inventory_2' label='Pack' to="/pack")
  //- q-route-tab(name='add' style="width:30px;")
    //- q-btn.text-grey-9(name='movies' round color="orange" icon='add' size="lg" style="margin-top:-65px")
  q-route-tab(name='auto' icon='local_shipping' to="/ride" label='Ride')
  //- q-tab(name='more' icon='groups' Zlabel='More'  @click='$store.state.left = true')

  //- q-page-sticky(position="bottom" :offset="[0, -30]" style="z-index:1000")
    q-btn.border-black(round icon="add" color="primary" size="lg" to="/template")

</template>

<script>
import { mapActions, mapGetters,mapState } from 'vuex'

export default {
  name: 'Nav',
  components: {  },
  data () {
    return {
      tabs: 'home',
    }
  },
  computed:{
    
  },
  created() {
  },
  methods:{
    
  }
}
</script>
<style lang="sass">

.my-tabs .q-tab__label
 font-size: 14px
 line-height: 26px
 font-weight: 400

</style>
