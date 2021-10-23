import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top',
  timeout: 2500,
  color: 'primary'
})

export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
