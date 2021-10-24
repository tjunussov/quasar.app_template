<template lang="pug">
q-list.text-primary
  template( v-if="hist && hist.date" )
    q-item(clickable v-ripple @click="open")
      //- q-item-section(avatar)
        q-btn(outline round dense color="white" text-color="primary" icon="local_shipping")
      q-item-section.q-pl-sm
          q-item-label.text-h6.text-weight-bold Order # {{hist.labelNumber}}
          q-item-label.text-grey Pick up by {{hist.date}}
      q-item-section(side top)
          r-btn(icon="more_vert")
    q-separator
</template>

<script>

import { defineComponent,toRefs,toRef, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'OrderHistory',
  props: {
    hist: Object
  },
  components: {
  },

  setup (props) {
    const $q = useQuasar();
    return {
      hist:toRef(props, 'hist'),
      open () {
        
      },
      
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
