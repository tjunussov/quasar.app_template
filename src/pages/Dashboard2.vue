<template lang="pug">
layout
  template(v-slot:header) Dashboard
  template(v-slot:footer): r-empty
  q-page.q-pa-md.q-gutter-xs
    q-list.bg-white(bordered separator)
      transition-group(appear enter-active-class="animated slideInDown" leave-active-class="animated fadeOut")
        q-item.q-pa-md(v-for="q in queue" :key="q.trackingNumber")
          q-item-section
            q-item-label.text-h6
              q-chip.text-h6.q-ml-none(v-if="q.referenceNumber") \#{{q.referenceNumber}}
              span.text-weight-bold {{q.trackingNumber}}
              
            q-item-label.text-grey.text-small
              q-icon(name="schedule") 
              | {{$format(q.created,'HH:mm')}}
          q-item-section(side Ztop)
            q-item-label.text-h6.text-dark.text-weight-bold 
              q-btn.Zno-border-radius.q-px-md(outline dense size="lg") {{q.cellCode?q.cellCode:'WAIT...'}}
            

    q-list(v-if="!queue.length")
      q-item.q-pa-md
        q-item-section
          q-item-label.text-h6.text-weight-bold.text-center No rider is waiting ... 

    
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'
import { $sound } from '../store/services/sound'

import layout from 'layouts/AppLayout.vue'

let intr = null;

export default {
  name: 'Dashboard',
  data () {
    return {
      queue:[
    // {
    //   "id": 1,
    //   "created": "2021-10-24T21:15:22.659384+06:00",
    //   "modified": "2021-10-24T21:21:20.64168+06:00",
    //   "locationCode": "DEMO",
    //   "cellCode": "CELL-DEV-01",
    //   "trackingNumber": "1230982192",
    //   "labelNumber": "1230982192",
    //   "status": "COMPLETED",
    //   "waiting": true,
    //   "history": null
    // }
  ]
    }
  },
  created(){
    this.dash();
    intr = window.setInterval(this.dash,5000);
  },
  beforeUnmount(){
    console.debug('beforeDestroy',intr);
    window.clearInterval(intr)
  },
  components: {
    layout
  },
  methods:{
    dash() {
      $api.dashboard().then((resp)=>{
        console.debug('$api.dashboard','resp->');
        this.processSound(resp);
        this.queue = resp.data;
      });
    },
    processSound(resp){
      if(isChanged(this.queue,resp.data)) {
        if(this.queue.length > resp.data.length)
          $sound.dequeue();
        else 
          $sound.enqueue();
      }
    }
  }
};


function isChanged(a,b){
  return JSON.stringify(a) != JSON.stringify(b)
}
</script>

<style lang="sass" scoped>

</style>
