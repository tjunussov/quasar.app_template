<template lang="pug">
q-dialog(ref="dialog" :modelValue="input" @update:modelValue="input = $event;" @hide="onDialogHide" maximized transition-show="slide-left" transition-hide="slide-right")
  layout.max-width
    template(v-if="title" v-slot:header) {{title}}
    template(v-slot:header-right): r-btn(icon='close' @click="onOKClick")
    template(v-slot:footer)
      q-footer.bg-transparent.q-pa-lg: slot(name="footer"): r-btn(@click="onOKClick" text-color="dark" outline) Back
    .q-page
      q-card-section.q-pa-lg.text-white(:class="{['bg-'+type]:true}")
        //- .text-subtitle Rider packed successfully
        .text-h3.text-weight-bold {{type=='positive'?'Success':(type=='negative'?'Error':type)}}
        .text-subtitle {{message}}
      q-list.bg-white.text-dark(separator)
        q-item.q-pa-lg
          q-item-section
            q-item-label(v-html="details")
            slot(name="details")
      slot: q-separator
  

</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import { defineComponent, ref, reactive } from 'vue'
import layout from 'layouts/AppLayout.vue'

var interval = null;

export default {
  props: {
    modelValue:{
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'positive'
    },
    title: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    details: {
      type: String,
      default: null
    },
    timeout:{
      type: Number,
      default: 1000
    }
  },
  watch:{
     modelValue(v){
       this.input = v
       if(v) this.progress();
     }
  },
  data(){
    return {
      input:false,
      mdiBarcodeScan:null,
    }
  },
  components: {
    layout,
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
      if(this.timeout){
        this.$q.loadingBar.start(0);
        var i = 0;
        interval = setInterval(() => {
          this.$q.loadingBar.increment((i++)*2);
          if(i == 10){
            clearInterval(interval)
            this.$q.loadingBar.stop();
            this.hide();
            this.$emit('timeout')
          }
        },this.timeout/10)
      }
    },
    show () {
      console.log('show');
      this.$refs.dialog.show();
      this.progress();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide () {
      this.$refs.dialog.hide();
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      clearInterval(interval);
      this.$q.loadingBar.stop();
      this.$emit('hide')
      this.$emit('update:modelValue',false);
    },

    onOKClick () {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide()
    },

    onCancelClick () {
      // we just need to hide the dialog
      this.hide()
    }
  },
}
</script>

<style lang="sass" scoped>

</style>
