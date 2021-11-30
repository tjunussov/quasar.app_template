<template lang="pug">
q-layout(view='lHr LpR lFr' :class="(dark?'bg-black':'')" @click.native="$bus.$emit('dialogcancel')")
  Keyboard
  q-header.shadow-light(height-hint="98" :class="dark?'bg-black':'bg-white'")
    q-toolbar.q-py-sm.q-px-md(:class="dark?'text-dark':'text-primary'" dark)
      slot(name="header-left")
        r-btn(icon="menu" aria-label='Menu' @click='toggleLeftDrawer' :text-color="menuShow?'primary':'grey-3'")
      q-toolbar-title.text-h5.text-center.text-weight-bold(:class="dark?'':'text-black'")
        slot(name="header")
      //- r-btn(icon='person')
      
      slot(name="header-right")
    //- q-list.bg-red(v-if="ui.mock" @click="ui.mock = false")
      q-item
        q-item-section(avatar)
        q-item-section.text-center.text-weight-bold.q-mr-md DEMO MODE
        q-item-section(side)
          q-icon(name="close" color="white")

    slot(name="list")
    q-ajax-bar(ref="bar" color="primary" size="4px")
  slot(name="menu")
    q-drawer.bg-primary(v-model='left' :width="250" Zshow-if-above bordered  side="left" :breakpoint='1400' dark)
      Menu
  q-page-container
    slot
  slot(name="footer" v-if="!ui.lock")
    //- q-footer.bg-white.shadow-light(Zbordered :class="{'ios-footer q-pb-md':$q.platform.is.ios}")
      slot(name="footer-body"): Nav.text-grey

  PinPad(v-model="showPinPadDialog" @ok="left = true")

</template>

<script>
import Menu from 'components/Menu.vue'
// import Nav from 'components/Nav.vue'
import PinPad from 'components/PinPad.vue'
import Keyboard from 'components/utils/Keyboard.vue'
import { Dialog as Notify } from 'boot/dialog'

import { mapState, mapGetters, mapActions } from 'vuex'
import { mapXGetters } from 'src/store'

export default {
  name: 'AppLayout',

  components: {
    Menu,
    // Nav,
    Keyboard,
    PinPad
  },
  computed:{
    ...mapXGetters(['left','ui','menu']),
    menuShow(){
      //  in settings menu force display menu button
      return this.menu;
    },
  },
  props: {
    dark: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      showPinPadDialog:false,
    }
  },
  methods:{
    yourCallBackFunction(){
      alert('asd');
    },
    toggleLeftDrawer () {
      if(this.menuShow){
        this.left = !this.left
      } else {
        // console.log('this.showPinPadDialog',this.showPinPadDialog);
        this.showPinPadDialog = true;
      }
    },
    resetScroll (el, done) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      done()
    },
    test2(){
      Notify.create({type: 'negative',message: 'errorMessage', title:"Test",details:"Order <b>123123</b>"})
    },
  }
}
</script>

<style lang="sass">

.font-mono
  font-family: monospace

.shadow-light 
  box-shadow: 0 5px 25px rgb(0 0 0 / 10%)


.disabled, [disabled]
  filter: grayscale(100%)
  opacity: 0.5 !important

.q-separator--dark
  background: rgba(255, 255, 255, 0.18)

.text-small 
  font-size: 14px

.mock 
  border: 5px solid #f00

.max-width
  max-width: 640px
  margin: 0 auto 
</style>
