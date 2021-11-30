<template lang="pug">
q-dialog(ref="dialog" :modelValue="modelValue" @update:modelValue="update" @hide="onDialogHide" maximized transition-show="slide-left" transition-hide="slide-right")
  q-layout(view='lHr LpR lFr' @click="onOKClick" :class="{['bg-'+(color||type)]:ui.kioskMode,'bg-grey-4':!ui.kioskMode}")
    q-header.shadow-light(height-hint="98" :class="dark?'bg-black':'bg-white'")
      q-toolbar.q-py-sm.q-px-md
        r-btn(icon='menu' aria-label='Menu' @click="onOKClick")
        q-toolbar-title.text-center.text-weight-bold.text-black {{title||(type=='positive'?'Success':(type=='negative'?'Error':type))}}
        r-btn(icon='close' @click="onOKClick")
      q-separator
    q-page-container
      template(v-if="ui.kioskMode")
        q-page.flex.flex-center.q-pa-lg.text-center(:class="{['bg-'+(color||type)]:true}")

          .q-gutter-md.text-white
            .q-mb-lg
              template(v-if="resp && resp.trackingNumber") 
                .text-h3 \#{{resp.trackingNumber}}
                q-btn.q-my-lg(color="white" outline)
                  .text-h1.text-weight-bold {{String(resp.trackingNumber).substr(-4)}}
                
              //- .text-h2.text-weight-bold {{type=='positive'?'Success':(type=='negative'?'Error':type)}} 
              .text-h2.text-weight-bold(v-html="message")
            .q-pt-xl: slot
      template(v-else)
        .q-page
          q-card-section.q-pa-lg.text-white(:class="{['bg-'+(color||type)]:true}")
            .text-h3.text-weight-bold {{type=='positive'?'Success':(type=='negative'?'Error':type)}}
            .text-subtitle {{message}}
          q-list.bg-white.text-dark(separator)
            q-item.q-pa-lg
              q-item-section
                q-item-label(v-html="details")
                slot(name="details")

          slot
    q-footer.bg-transparent.q-pa-lg(vZ-if="!ui.kioskMode"): slot(name="footer"): r-btn(@click="onOKClick" v-if="!ui.kioskMode" text-color="dark" outline) Back
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

var interval = null;

export default {
  props: {
    modelValue:{
      type: Boolean,
      default: undefined
    },
    dark: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'positive'
    },
    color: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    resp: {
      type: Object,
    },
    details: {
      type: String,
      default: null
    },
    timeout:{
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters(['timeouts','ui']),
    xtimeout(){
      return this.type=='negative'?this.timeouts.errorDialog:(this.timeout !== null?this.timeout:this.timeouts.resultDialog);
    }
  },
  watch:{
     modelValue(v){
      //  this.input = v
       if(v && this.xtimeout > 0) this.progress();
     }
  },
  data(){
    return {
      // input:false,
      mdiBarcodeScan:null,
    }
  },
  components: {
    // layout :()=> import('layouts/MainLayout.vue'),
  },
  emits:['update:modelValue','ok', 'hide','timeout'],
  mounted(){
    
      // this.$q.loadingBar.setDefaults({
      //   color: 'purple',
      //   size: '15px',
      //   position: 'bottom'
      // })
  },
  beforeUnmount(){
    clearInterval(interval);
  },
  methods:{
    // following method is REQUIRED
    // (don't change its name --> "show")
    progress(){
      this.$bus.$emit('dialogshow');
      this.$q.loadingBar.start(0);
      var i = 0;
      interval = setInterval(() => {
        this.$q.loadingBar.increment((i++)*2);
        if(i == 10){
          // console.log('clearing',i,this.timeout);
          this.hide();
          this.$emit('timeout')
        }
      },this.xtimeout/10)
    },
    update(v){
      this.$emit('update:modelValue',v);
    },
    stopProgress(){
      // console.log('stopProgress');
      clearInterval(interval);
      this.$q.loadingBar.stop();
    },
    show () {
      // console.log('show');
      this.$refs.dialog.show();
      this.progress();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide();
      this.$q.loadingBar.stop();
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.stopProgress();
      this.$emit('hide');
      this.$bus.$emit('dialoghide');
      // this.$emit('update:modelValue',false);
    },

    onOKClick () {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$bus.$emit('dialogcancel')
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    },

    onCancelClick () {
      // we just need to hide the dialog
      this.$bus.$emit('dialogcancel')
      this.hide()
    }
  },
}
</script>

<style lang="sass" scoped>

</style>
