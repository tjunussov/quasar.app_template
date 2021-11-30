import { boot } from 'quasar/wrappers'
import VuexPersistence from 'vuex-persist'

// https://github.com/championswimmer/vuex-persist
// https://github.com/coreymcg/vuex-persist-state

export default boot(({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    // reducer: (state) => ({products: state.user}), // only save user module
    // filter: (mutation) => mutation.type == 'addNavItem',
    modules: ['settings'], //only save user module
    }).plugin(store);
})