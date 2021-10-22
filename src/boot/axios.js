import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://talabat.com' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
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


export { api }



