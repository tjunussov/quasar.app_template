<template lang="pug">
q-layout.bg-grey-4(view='lHr LpR lFr')
  q-header.bg-white.shadow-light(bordered height-hint="98")
    q-toolbar.q-py-sm.text-primary
      r-btn(icon='menu' aria-label='Menu' @click='toggleLeftDrawer')
      q-toolbar-title.text-center.text-weight-bold.text-black Pick Up
      //- r-btn(icon='person')
      r-btn(icon='support_agent')
      
    q-separator
    q-list.text-primary
      q-item(clickable v-ripple)
        q-item-section
          q-item-label.text-h6.text-weight-bold Order #583039598
          q-item-label(caption lines) Pick up by 19:30
        q-item-section(side top)
          r-btn(icon="more_horiz")
        q-item-section(side top)
          r-btn(icon="map")
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


.disabled, [disabled]
  filter: grayscale(100%)
  opacity: 0.5 !important

</style>
