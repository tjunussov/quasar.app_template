<template lang="pug">
layout.max-width
  template(v-slot:header) Settings
  template(v-slot:header-right): r-btn(icon="settings" :color="expert?'primary':'grey'" @click="expert = !expert")
  template(v-slot:footer): r-empty
  q-page.q-py-lg

    r-list
      r-item(label="Locked")
        q-toggle(v-model="ui.lock" :disable="!ui.pincode")
      r-item(label="PinCode")
        q-input(v-model="ui.pincode" Ztype="password" @update:modelValue="ui.lock = $event != null" clearable dense borderless input-class="text-right")
      q-item(to="/settings/tweaks" v-if="expert")
          q-item-section 
            q-item-label.text-weight-bold Tweaks 
          q-item-section(side ): q-icon.q-mr-sm(name="arrow_forward_ios")
    
    r-list(label="Section")
      r-item(noside)
        template(v-slot:label)
          q-item-label.text-weight-bold Scan Attempts
          q-item-label.text-small.text-grey {{test}}
        q-slider(v-model="test"  :min="1" :max="10" :step="1" snap)


    r-list(label="SECTION")
      template(v-slot:right): q-icon.q-ml-xs(name="refresh" @click="fetchPrinterList")
      q-item( clickable :active="printer.name == p.name" active-class="text-primary" v-ripple v-for="p in printerList" @click="selectPrinter(p)")
        q-item-section 
          q-item-label.text-weight-bold {{p.name}}
          q-item-label.text-small.text-grey {{p.name}}
        q-item-section(side) 
          q-checkbox(:modelValue="(printer.name == p.name) ? true: false" @click="selectPrinter(p)")

    .q-px-md.q-mt-md.text-grey.text-small
    q-list.bg-white(bordered separator)
      template(v-if="printer.address")
        r-item(label="Print Immediately")
          q-toggle(v-model="printer.autoPrint" :disable="!printer.address")
        q-item(v-if="expert")
          q-item-section
            q-input(v-model="test" autogrow placeholder="Placeholder" label="Label Template" hint="ZPL Format, with test data " dense borderless input-class="font-mono")
          q-item-section(side) 
            r-btn(icon="print" @click="testMethod" :disabled="!test")

    template(v-if="expert")
      r-list(label="SERVER")
        r-item(label="Demo Mode")
          q-toggle(v-model="ui.mock")
        q-item
          q-item-section(avatar)
            q-item-label.text-weight-bold Location
          q-item-section
            q-item-label
              q-select(use-input dense 
                :model-value="server.location" 
                @input-value="(v)=>{ server.location = v}" 
                option-value="code"
                option-label="code"
                borderless 
                hide-hint 
                hide-selected 
                behavior="menu" 
                fill-input 
                input-debounce="10" 
                :options="locationList" 
                input-class="text-right" @filter="fetchLocationList")
            //- q-input(v-model="location" dense borderless input-class="text-right")
              q-menu(@show="fetchLocationList")
                q-list
                  q-item(clickable v-close-popup v-for="l in locationList" @click="this.location = l")
                    q-item-section {{l}}

        q-item
          q-item-section(avatar) 
            q-item-label.text-weight-bold Server
          q-item-section
            q-input(v-model="server.baseURL" placeholder="https://server/api" Zhint="baseURL+'/locations/'+location+'/'" dense borderless input-class="text-right")
        
    template(v-if="expert")
      .q-px-md.q-pt-lg.text-grey
      q-list.bg-white(bordered separator)
        q-item
          q-btn.full-width(@click="console" dense flat text-color="primary" no-caps color="white") Console

      .q-px-md.q-pt-lg.text-grey
      q-list.bg-white(bordered separator)
        q-item
          q-btn.full-width(@click="reset" dense flat text-color="primary" no-caps color="white") Factory Reset

          

      
</template>

<script>

import { colors } from "quasar";
import layout from 'layouts/AppLayout.vue'
import $cordovaApi from 'src/store/services/cordova'
import { $api } from '@/store/services/api'
import { mapXState, mapXGetters } from 'src/store'
import { mapState, mapGetters } from 'vuex' 

export default {
  name: 'Settings',
  meta: {
    title: 'Settings',
  },
  components: {
    layout,
  },
  computed: {
    ...mapXGetters([
        'expert','ui','right','server'
    ])
  },
  created(){
    this.fetchPrinterList();
  },
  data(){
    return {
      printer: { name:'Test'},
      printerList:[{name:'Test'}],
      locationList:[],
      cellList:null,
      test:1,
      printLabelNumber:"123456",
      cameraList:[
        {type:'front',name:'Front'},
        {type:'back',name:'Back'},
      ]
    }
  },
  methods:{
    testMethod(){
      // colors.setBrand("primary", "red");
    },
    fetchPrinterList () {
      // return $cordovaApi.printerList().then((list)=>{
      //   this.printerList = list;
      // });
    },
    fetchLocationList (val, update, abort) {
      console.log('fetchLocationList');
      // return $api.locationList().then((resp)=>{
      //   update(() => { this.locationList = resp.data; })
      // });
      update(() => { this.locationList = ['test']; })
    },
    selectPrinter(p){

    },
    reset(){
      if(confirm('Are you sure? Wll restore to factory settins')){
        localStorage.removeItem('vuex');
        window.location.reload();
      }
    },
    console(){
      this.right = true;
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
