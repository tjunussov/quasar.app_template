import { boot } from 'quasar/wrappers'
import { date } from 'quasar'

const dateFormat = (val,fmt) => {
  return date.formatDate(val,fmt);
}

export default boot(({ app }) => {
  app.config.globalProperties.$format = dateFormat
})

export { dateFormat }
