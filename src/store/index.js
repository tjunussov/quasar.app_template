import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
// import createLogger from 'vuex/dist/logger'

import { http } from 'boot/axios'
import settings from './modules/settings'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      settings
    },
    state: {
      menu:false,
      left:false,
      right:false,
      bottom: true,
      expert:false,
    },
    getters: {
      menu: (state,getters) => {
        return !getters.ui.lock || state.menu;
      },
      left: state => state.left,
      right: state => state.right,
      bottom: state => state.bottom,
      expert: state => state.expert,
    },
    
    actions: {
      $init({ commit, state, dispatch }){
        console.log('init',this._vm.$urlParams);
      }
    },
    // plugins: process.env.DEV ? [createLogger()] : [],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    // strict: process.env.DEBUGGING,
    strict: false,
    mutations: {
      set(state, { type, value }) {
        state[type] = value
      },
    },
  })

export default Store;



  // in some utils/vuex.js file 
// export const mapSetter = (state, setters = {}) => (
//   Object.keys(state).reduce((acc, stateName) => {
//     acc[stateName] = {
//       get: state[stateName],
//       set(v) { 
//         console.log(v, stateName); 
//         // var type = param[stateName]?param[stateName]:stateName;
//         Store.commit('set',{type:stateName,value:v }); 
//       }
//    };
//    // check if setter exists
//    if (setters[stateName]) {
//       acc[stateName].set = setters[stateName];
//    }

//    return acc;
//  }, {})
// );


import { mapState, mapGetters } from 'vuex' 

export const mapXState = (state, setters = {}) => {
  return mapSetters(mapState(state),state,setters);
};

export const mapXGetters = (state, setters = {}) => {
  return mapSetters(mapGetters(state),state,setters);
};

function mapSetters(state,param,setters = {}){

  return Object.keys(state).reduce((acc, stateName) => {
    // console.log('keys',state, stateName); 
    acc[stateName] = {
        get: state[stateName],
        set(value) { 
          var type = param[stateName]?param[stateName]:stateName;
          // console.log('type value',type,value,stateName, param[stateName], type); 
          Store.commit('set',{type,value }); 
        }
    };
    // check if setter exists
    if (setters[stateName]) {
        acc[stateName].set = setters[stateName];
    }

    return acc;
  }, {})

}