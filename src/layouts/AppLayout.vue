<template lang="pug">
q-layout(view='lHr LpR lFr' :class="dark?'bg-black':'bg-grey-4'")
  Keyboard
  q-header.shadow-light(height-hint="98" :class="dark?'bg-black':'bg-white'")
    q-toolbar.q-pa-sm(:class="dark?'text-dark':'text-primary'" dark)
      r-btn(icon='menu' aria-label='Menu' @click='toggleLeftDrawer')
      q-toolbar-title.text-h5.text-center.text-weight-bold(:class="dark?'':'text-black'")
        slot(name="header") Header
      //- r-btn(icon='person')
      r-btn(icon='support_agent')
    slot(name="list")
    q-ajax-bar(ref="bar" color="primary" size="4px")
  q-drawer.bg-primary(v-model='leftDrawerOpen' :width="250" show-if-above bordered  side="left" :breakpoint='1400' dark)
    Menu
  q-page-container
    slot
  slot(name="footer")
    q-footer.bg-white.shadow-light(  Zbordered :class="{'ios-footer q-pb-md':$q.platform.is.ios}")
      Nav.text-grey

</template>

<script>
import Menu from 'components/Menu.vue'
import Nav from 'components/Nav.vue'
import Keyboard from 'components/utils/Keyboard.vue'


import { defineComponent, ref, onMounted  } from 'vue'

export default defineComponent({
  name: 'AppLayout',

  components: {
    Menu,
    Nav,
    Keyboard
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
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
  margin: 0 auto 
</style>
