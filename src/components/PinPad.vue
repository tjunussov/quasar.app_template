<template lang="pug">
q-dialog(ref="dialog" v-model="dialog" @hide="hide" maximized transition-show="slide-right" transition-hide="slide-left")
  q-layout.bg-white(view='lHr LpR lFr' Zclick="onOKClick")
    q-header.q-pa-md.bg-transparent
       q-toolbar
        r-btn(icon="close" v-close-popup)
        q-toolbar-title.text-h5.text-center.text-weight-bold.text-black Pincode
        r-btn(icon="as" v-close-popup)

    .q-pt-lg
      q-page.q-px-lg.flex.flex-center.text-center.text-dark
        .q-gutter-md(style="width:270px")
          r-pincode(v-model="pincode" :pin="ui.pincode" color="primary")
          //- q-input(v-model="pincode" :maxlength="ui.pincode.length" input-class="text-center" input-style="font-size:3em;" color="primary")
          .q-my-lg.text-body2 Enter pincode, you can 
            br 
            | learn from Talabat supervisor
          q-btn(@click="press(i)" round unelevated v-for="i in 9" size="xl" color="grey-3" text-color="dark") {{i}}
          q-btn(@click="scanQR" round unelevated size="xl" color="grey-3")
            q-icon(:name="mdiBarcodeScan" size="28px" color="dark")
          q-btn(@click="press(0)" round unelevated size="xl" color="grey-3" text-color="dark") 0
          q-btn(@click="remove" :disable="!pincode" round unelevated size="xl" color="grey-3" text-color="dark" icon="chevron_left")
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'
import { mdiBarcodeScan } from '@quasar/extras/mdi-v6'

import { mapXState, mapXGetters } from 'src/store'
import $cordovaApi from '../store/services/cordova'
var interval = null;

export default {
  created () {
    this.mdiBarcodeScan = mdiBarcodeScan
    if(this.modelValue == undefined) this.dialog = true;
  },
  props: {
    modelValue:{
      type: Boolean,
      default: undefined
    },
    timeout:{
      type: Number,
      default: 10000
    }
  },
  computed: {
    ...mapXGetters(['menu','ui']),
    pincodeLength(){
      return this.pincode.length;
    }
  },
  data(){
    return {
      pincode:'',
      dialog:false,
      mdiBarcodeScan:null,
    }
  },
  watch:{
    modelValue(v){
      if(v){
        // Skipping pincode dialog if already showed
        if(interval || !this.ui.pincode?.length) 
          this.onOKClick();
        else 
          this.dialog = true;
      } else {
        this.dialog = false;
      }
    }
  },
  components: {
    // layout :()=> import('layouts/MainLayout.vue'),
  },
  emits:['update:modelValue','ok', 'hide'],
  methods:{
    remove(){
      this.pincode = this.pincode.substr(0,this.pincodeLength - 1);
    },
    press(i){
      i = String(i);
      if(this.pincodeLength == this.ui.pincode.length ) this.pincode = i
      else {
        this.pincode = this.pincode + i;
        this.check(this.pincode);
      }
    },
    check(c){
      // console.log('check',c);
      if(this.ui.pincode == c || this.ui.adminPin == c) {
        this.onOKClick();
      }
    },
    scanQR(){
      return $cordovaApi.scanBarcode().then((data)=>{
        this.check(data);
      });
    },
    hide () {
      this.dialog = false;
      this.pincode = '';

      if(this.modelValue == undefined){
        console.log('navigating back');
        this.$router.push({path:this.$route.query.from || '/',query:{restore:true}});
      } else {
        this.$emit('hide');
        this.$bus.$emit('dialoghide');
        this.$emit('update:modelValue',false);
      }
    },
    onOKClick () {
      this.menu = true;
      this.ui.lock = false
      this.menu = false

      if(this.modelValue == undefined){
        this.$router.push(this.$route.query.to || '/');
      } else {
        this.$bus.$emit('dialogcancel')
        this.$emit('ok');
        this.hide();
      }
    },
  },
}
</script>

<style lang="sass" scoped>

</style>
