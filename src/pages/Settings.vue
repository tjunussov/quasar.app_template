<template lang="pug">
layout.max-width
  template(v-slot:header) Settings
  template(v-slot:footer): r-empty
  q-page.q-py-lg
    .q-px-md.text-grey Printer List
    q-list.bg-white(bordered separator)
      q-item( clickable active-class="text-primary" v-ripple v-for="p in printers" @click="selectPrinter(p)")
        //- q-item-section(avatar)
          q-btn(outline round dense color="white" text-color="primary" icon="local_shipping")
        q-item-section 
          q-item-label.text-weight-bold {{p.name}}
          q-item-label.text-small.text-grey {{p.address}}
        q-item-section(side) 
          q-checkbox(:modelValue="selectedPrinter && selectedPrinter.name == p.name" @click="selectPrinter(p)")

      

      
</template>

<script>

import layout from 'layouts/AppLayout.vue'
import { defineComponent, ref, reactive } from 'vue'

import $cordovaApi from '../store/services/cordova'

export default defineComponent({
  name: 'Settings',

  components: {
    layout,
  },
  created(){
    var p = localStorage.getItem('printer');
    if(p !== null) {
      this.$root.selectedPrinter = this.selectedPrinter = JSON.parse(p);
    }
    this.printerList();
  },
  data(){
    return {
      printers:[],
      selectedPrinter:null
    }
  },  
  methods:{
    printerList () {
      return $cordovaApi.printerList().then((resp)=>{
        this.printers = resp;
      });
    },
    selectPrinter(p){
      console.log('selectPrinter',p);
      this.selectedPrinter = p
      localStorage.setItem('printer',JSON.stringify(p));
    }
  }
})
</script>

<style lang="sass" scoped>

</style>
