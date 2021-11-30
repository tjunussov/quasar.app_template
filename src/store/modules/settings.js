export default {
  state: {
    navigation: null,
    ui:{
      mock: false,
      useLabel: false,
      pincode: '1234',
      adminPin: '7777',
      lock: false,
    },
    timeouts:{
      test:1000,
    },
    server:{
      'baseURL':'http://test'
    }
  },
  getters: {
    navigation: state => state.navigation,
    ui: state => state.ui,
    timeouts: state => state.timeouts,
    server: state => state.server
  },
  mutations: {
    set(state, { type, value }) {
      state[type] = value
    },
  },
}
