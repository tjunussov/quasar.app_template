import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

var baseURL = null;
var subpath = null;

const $http = axios.create()

export default boot(({ app, store }) => {
  // for use inside Vue files (Options http) through this.$axios and this.$http

  // app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options http form)
  //       so you won't necessarily have to import axios in each vue file

  // axios.defaults.headers.common.Authorization = `Bearer ${store.getters['auth/keycloak'].token}` store.state['location'];

  store.watch(() => store.getters.server.baseURL,(v)=>{
    console.debug('--> baseURL',v)
    baseURL = v;
    $http.defaults.baseURL = baseURL;
  },{ immediate: true })

  store.watch(() => store.getters.server.location,(v)=>{
    console.debug('--> location',v)
    $http.defaults.subpath ='/locations/' + v;
  },{ immediate: true })

  // setBaseUrl();
  
  app.config.globalProperties.$http = $http
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})


// api.interceptors.response.use(function (response) {

// // console.log('responsezzz',response);
//   if( response.config.hasOwnProperty('respSuccess') && response.config.respSuccess ) {

//     Notify.create({
//       color: 'green',
//       textColor: 'white',
//       icon: 'info',
//       message: response.config.respSuccess
//     })
//   }


//   return response;
// }, function (error) {

//   if( error.config && error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
//     return Promise.reject(error);
//   }
//   if (error.response) {
//     Notify.create({
//       color: 'red',
//       textColor: 'white',
//       icon: 'error',
//       message: error.response.config.url+' '+ error.response.data.message
//     })

//   }
// });


export { $http }



