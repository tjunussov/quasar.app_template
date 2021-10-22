import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  app.config.globalProperties.$version = process.env.VERSION
  console.debug('$version',app.config.globalProperties.$version)
})
