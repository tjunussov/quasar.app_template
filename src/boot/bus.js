import { boot } from 'quasar/wrappers'
import emitter from 'tiny-emitter/instance'


const $bus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
};

export default boot(({ app }) => {
  app.config.globalProperties.$bus = $bus;
})

export { $bus }