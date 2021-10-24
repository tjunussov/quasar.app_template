<template lang="pug">
q-layout.bg-grey-4(view='lHr LpR lFr')
  q-header.bg-white.shadow-light(bordered height-hint="98")
    q-toolbar.q-pb-sm.text-primary.max-width
      r-btn(icon='menu' aria-label='Menu' @click='toggleLeftDrawer')
      q-toolbar-title.text-center.text-weight-bold.text-black Pick Up
      //- r-btn(icon='person')
      r-btn(icon='support_agent')
      
    q-separator
    q-list.text-primary
      q-item(clickable v-ripple)
        //- q-item-section(avatar)
          q-btn(outline round dense color="white" text-color="primary" icon="local_shipping")
        q-item-section.q-pl-sm
          q-item-label.text-h6.text-weight-bold Order #583039598
          q-item-label.text-grey Pick up by 19:30
        q-item-section(side top)
          r-btn(icon="more_vert")
        //- q-item-section(side top)
          r-btn(icon="map")
    q-ajax-bar(ref="bar" color="primary" size="4px")
  q-drawer.bg-primary(v-model='leftDrawerOpen' :width="250" show-if-above bordered  side="left" :breakpoint='1400' dark)
    Menu
  q-page-container.max-width
    router-view
  q-footer.bg-white.shadow-light(  Zbordered :class="{'ios-footer q-pb-md':$q.platform.is.ios}")
    Nav.text-grey.max-width

</template>

<script>
import Menu from 'components/Menu.vue'
import Nav from 'components/Nav.vue'

import { defineComponent, ref, onMounted  } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Menu,
    Nav
  },


  setup () {
    const leftDrawerOpen = ref(false)
    const bar = ref(null)

    // onMounted(() => {
    //   bar.value.start()
    // });

    return {
      bar,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      resetScroll (el, done) {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        done()
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

.q-separator--dark
  background: rgba(255, 255, 255, 0.18)


.max-width
  max-width: 640px
</style>
