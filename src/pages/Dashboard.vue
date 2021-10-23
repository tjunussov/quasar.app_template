<template lang="pug">
q-page.q-pa-lg.flex.flex-center
  q-btn(color="grey" @click="dash") Dashboard
    
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'

export default defineComponent({
  name: 'Dashboard',

  components: {
  },

  setup () {
    const $q = useQuasar()
    const orderNum = ref('')
    const order = reactive({
      id: '583039599',
      key: '#3918',
      address: 'Talabat Mart, Port Saed',
      date: '07-05-2021 15:55:43'
    })

    return {
      orderNum,
      order,
      dash() {
        order.id = orderNum.value
        // labelNumber
        $api.dashboard().then((resp)=>{
          console.debug('$api.dashboard',order.id,'resp->',resp.data);
          $q.notify({ type: 'info',color: 'primary',message: resp.data.result })
        });
      },
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
