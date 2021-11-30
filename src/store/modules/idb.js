import Vue from 'vue'
import Vuex from 'vuex'
import { Notify } from 'quasar'

import { date } from 'quasar'

import { http } from 'boot/axios'
// import { mqtt } from 'boot/mqtt'

const turnon = new Audio('/sounds/turnon.wav');
const turnoff = new Audio('/sounds/new.mp3');

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default {
    state: {
      mqttOnline: false,
      deviceOnline: false,
      lastUpdated: null,
      entities : [
        { pending:false, icon:"mdi-lightbulb",name:'Light 1', subtile:"Свет в прихожей", id:"POWER2",type:'light',value:null,demoValue:'ON'},
        ]
    },
    getters: {
      entities: state => state.entities,
      lastUpdated: state => state.lastUpdated,
      mqttOnline: state => state.mqttOnline,
    },
    mutations: {
      setEntities (state,value) {
        state.entities = value
      },
    },
    actions: {
      $init({ commit, state, dispatch }){
      },
      $turnon(){
        // turnoff.stop();
        turnon.play();
      },
      $turnoff(){
        // turnon.stop();
        turnoff.play();
      }
    },
}


