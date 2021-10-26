import mitt from 'mitt'
import { boot } from 'quasar/wrappers'
import emitter from 'tiny-emitter/instance'

// const emitter = mitt();

// export default boot(({ app }) => {
//   app.config.globalProperties.$bus ={
//     get: function () {
//       return emitter
//     }
//   }
// })





export default boot(({ app }) => {
  app.config.globalProperties.$bus = {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args)
  }
})