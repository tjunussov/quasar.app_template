<template lang="pug">
q-input(:label="label" Zsize="lg" Zoutlined :modelValue="input" @update:modelValue="input = $event; $emit('update:modelValue',input)" Zrules="[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]" )
  template(v-slot:append)
    r-btn(icon="camera_alt" color="grey" @click="type=='ocr'?scanOCR():scanBarcode()")
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import $cordovaApi from '../store/services/cordova'
import { $sound } from '../store/services/sound'

export default defineComponent({
  name: 'InputLabel',
  props: {
    label: {
      type: String,
      default: 'Default'
    },
    length: {
      type: String,
      default: 1
    },
    modelValue:String,
    extract:{
      type: String,
      default: '#'
    },
    message:{
      type: String,
      default: 'Please scan screen'
    },
    type:{
      type: String,
      default: 'ocr'
    },
    prefix:{
      type: String,
      default: ''
    },
    defaultValue:String,
    disabled: {
      type: Boolean,
      default: false
    },
  },
  watch:{
     modelValue(v){
       this.input = v
     }
  },
  data(){
    return {
      input:''
    }
  },
  mounted(){
    if(this.type == 'barcode') this.$bus.$on('keyboard:keydown:enter'+(this.prefix?':'+this.prefix:''),this.keyboardBarcode);
  },
  beforeUnmount(){
    if(this.type == 'barcode') this.$bus.$off('keyboard:keydown:enter'+(this.prefix?':'+this.prefix:''),this.keyboardBarcode);
  },
  emits: ['update:modelValue','data'],
  methods:{
    scanOCR(){
      $cordovaApi.scanOCR(this.extract,{label:this.label,defaultValue:this.defaultValue}).then((data)=>{
        console.debug('$cordovaApi.scanOCR',data);

        // ELDAR Expacting here JSON {text:'',raw:''} please see mock
        this.input = data.text?data.text:data;
        if(data && data.raw) this.$emit('data',data);

        this.$emit('update:modelValue', this.input);
      });
    },
    scanBarcode(){
      $cordovaApi.scanBarcode({label:this.label,defaultValue:this.defaultValue}).then((data)=>{
        console.debug('$cordovaApi.scanBarcode',data);
        this.input = data;
        this.$emit('update:modelValue', this.input);
      });
    },
    keyboardBarcode(data){
      this.input = data;
      this.$emit('update:modelValue', this.input);
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
