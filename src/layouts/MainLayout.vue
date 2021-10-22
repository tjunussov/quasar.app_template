<template lang="pug">
q-layout.bg-grey-4(view='lHr LpR lFr')
  q-header.q-py-sm.bg-white.shadow-light(bordered height-hint="98")
    q-toolbar.text-primary
      q-btn(flat='' dense='' round='' icon='menu' aria-label='Menu' @click='toggleLeftDrawer')
      q-toolbar-title.text-center.text-weight-bold.text-black Pick Up
      q-btn(flat round dense icon='support_agent')
  q-drawer(v-model='leftDrawerOpen' :width="250" show-if-above bordered  side="left" :breakpoint='1400')
    Menu
  q-page-container
    router-view
  q-footer.bg-white.shadow-light(Zbordered :class="{'ios-footer':$q.ios}")
    Nav.text-grey

</template>

<script>
import Menu from 'components/Menu.vue'
import Nav from 'components/Nav.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu,
    Nav
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="sass">

.barcode
  font-family: 'code128' !important
  font-size: 44px  !important
  line-height: 52px

.shadow-light 
  box-shadow: 0 5px 25px rgb(0 0 0 / 10%)


</style>
