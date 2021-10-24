<template lang="pug">
q-input(label="LabelZ No" @dblclick="labelNumber = '583039600'" v-model="labelNumber" :rules="[ val => val.length >= LENGTH || 'Please use minimum '+LENGTH+' characters' ]" )
  template(v-slot:append)
    r-btn(icon="camera_alt" color="grey" @click="scan")
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'InputLabel',

  components: {
  },

  setup (props) {
    const $q = useQuasar()
    const labelNumber = ref('')
    const LENGTH = 9;
    
    return {
      labelNumber,
      LENGTH,
      scan(){
        $q.dialog({
          title: 'OCR Scaner',
          message: 'Please scan screen'
        }).onOk(()=>{
          labelNumber.value = '583039599'
          console.log(labelNumber.value);
        })
      },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
