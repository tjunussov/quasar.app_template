<template lang="pug">
layout
  template(v-slot:header) Dashboard
  template(v-slot:footer) r-empty
  q-page.q-pa-md
    q-list.bg-white( bordered separator)
      q-item.q-pa-md(v-for="q in queue")
        q-item-section
          q-item-label.text-h6.text-weight-bold \#{{q.referenceNumber||q.trackingNumber}}
          q-item-label(v-if="q.referenceNumber") {{q.trackingNumber}}
        q-item-section(side Ztop)
          q-item-label.text-h6.text-dark.text-weight-bold {{q.cellCode}}
          q-item-label.text-grey Time {{$format(q.created,'HH:mm')}}

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
        if(this.queue.length != resp.data.length) $sound.queue();
        this.queue = resp.data;
      });
    },
  }
};

</script>

<style lang="sass" scoped>

</style>
