<template lang="pug">
q-input(label="LabelZ No" v-model="input" Zrules="[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]" )
  template(v-slot:append)
    r-btn(icon="camera_alt" color="grey" @click="scan")
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import $cordovaApi from '../store/services/cordova'
import { $sound } from '../store/services/sound'

export default defineComponent({
  name: 'InputLabel',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },

  setup (props) {
    const $q = useQuasar()
    const input = ref('')
    const LENGTH = 9;
    
    return {
      input,
      LENGTH,
      scan(){
        input.value = $cordovaApi.scanOCR();
        $sound.scanBegin();
        $q.dialog({
          title: 'OCR Scanner',
          message: 'Please scan screen'
        }).onOk(()=>{
          $sound.scan();
        })
      },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
