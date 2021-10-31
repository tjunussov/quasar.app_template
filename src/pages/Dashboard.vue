<template lang="pug">
layout(dark)
  template(v-slot:header) Dashboard
  template(v-slot:header-right): r-btn(icon='volume_up' @click="say('1 2 3 4','pick from box 3')")
  template(v-slot:footer): r-empty
  q-page( v-if="queue.length")
    q-tabs(align="justify")
      q-tab(label="Waiting" v-if="isWait")
      q-tab(label="Done")
    .row(:class="{'blink':blink}")
      .col.q-pl-xs.q-gutter-xs(v-if="isWait")
        transition-group(appear enter-active-class="animated slideInDown" leave-active-class="animated fadeOut")
          ticket.bg-primary(v-for="q in waitQueue" :key="q.trackingNumber" :t="q")
      .col.q-px-xs.q-gutter-xs(:class="{'grid-container':!isWait}")
        transition-group(appear enter-active-class="animated slideInDown" leave-active-class="animated fadeOut")
          ticket.bg-dark(v-for="q in doneQueue" :key="q.trackingNumber" :t="q")
  q-page.flex.flex-center(v-else)
      q-item-label.text-h6.text-weight-bold.text-center 
        q-icon(name="mood" size="65px")
        .q-mt-md No rider is waiting ... 
            
    
</template>

<script>

import { defineComponent, ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { $api } from '../store/services/api'
import { $sound } from '../store/services/sound'

import layout from 'layouts/AppLayout.vue'
import ticket from 'components/DashboardTicket.vue'

let intr = null;

export default {
  name: 'Dashboard',
  data () {
    return {
      blink:false,
      optionsVoice:[],
      nospeak:true,
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
  computed:{
    isWait(){
      return this.waitQueue.length > 0;
    },
    doneQueue(){
      return this.queue.filter((f)=>!f.waiting)
    },
    waitQueue(){
      return this.queue.filter((f)=>f.waiting)
    }
  },
  created(){
    this.dash();
    this.$q.dark.set(true);
    intr = window.setInterval(this.dash,5000);
  },
  beforeUnmount(){
    console.debug('beforeDestroy',intr);
    this.$q.dark.set(false);
    window.clearInterval(intr)
  },
  components: {
    layout,
    ticket
  },
  methods:{
    
    dash() {
      this.blink = true;
      $api.dashboard().then((resp)=>{
        this.processSound(resp);
        this.blink = false;
        this.queue = resp.data;
      });
    },
    processSound(resp){
      if(isChanged(this.queue,resp.data)) {
        if(this.queue.length > resp.data.length)
          $sound.dequeue();
        else {
          var o = resp.data[0];
          if(o && this.nospeak && !o.waiting){
            // this.nospeak = false;
            this.say(o.trackingNumber||o.referenceNumber,'pick from box '+o.cellCode).then(()=>{
              this.nospeak = true;
            });
          }
          $sound.enqueue();
        }
      }
    },
    say(order,cell){
      return this.$speechTalk(`Order number ${String(order).substr(-4).split("").join(" ")} ${cell}`);
    },
  }
};


function isChanged(a,b){
  return JSON.stringify(a) != JSON.stringify(b)
}
</script>

<style lang="sass">


.blink .ticket-arrow
  visibility: hidden


.grid-container
  display: grid
  grid-template-columns: 50% 50%
  grid-template-rows: auto auto
  grid-auto-flow: column
  column-count:2

</style>
