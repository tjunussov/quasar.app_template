<template lang="pug">
q-input(:label="label" :modelValue="input" update:modelValue="input = $event" Zrules="[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]" )
  template(v-slot:append)
    r-btn(icon="camera_alt" color="grey" @click="scanOCR")
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
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
    message:{
      type: String,
      default: 'Please scan screen'
    },
    type:{
      type: String,
      default: 'ocr'
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
    this.$bus.$on('keyboard:keydown:enter',this.keyboardBarcode);
  },
  beforeUnmount(){
    this.$bus.$off('keyboard:keydown:enter',this.keyboardBarcode);
  },
  emits: ['update:modelValue'],
  methods:{
    scanOCR(){
      $cordovaApi.scan(this.type,this.label,this.defaultValue).then((data)=>{
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
