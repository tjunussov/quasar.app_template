import { boot } from 'quasar/wrappers'
import rBtn from '../components/ui/r-btn.vue'
import rCard from '../components/ui/r-card.vue'
import rDialog from '../components/ui/r-dialog.vue'
import rTabs from '../components/ui/r-tabs.vue'
// import rBtnCard from '../components/ui/r-btncard.vue'
// import rInput from '../components/ui/r-input.vue'
// import rInputSearch from '../components/ui/r-input-search.vue'
// import rAlert from '../components/ui/r-alert.vue'
// import rBadge from '../components/ui/r-badge.vue'

import rList from '../components/ui/r-list.vue'
import rItem from '../components/ui/r-list-item.vue'
import rToggle from '../components/ui/r-toggle.vue'
import rColor from '../components/ui/r-color.vue'

import rPincode from '../components/ui/r-pincode.vue'



import { h } from 'vue'

const EmptySlot = {
  functional: true,
  render: () => h('template')
}


export default boot(async ({ app }) => {
  app.component('r-btn', rBtn)
  app.component('r-card', rCard)
  app.component('r-empty', EmptySlot)
  app.component('r-dialog', rDialog)
  app.component('r-tabs', rTabs)
  
  // app.component('r-btncard', rBtnCard)
// app.component('r-input', rInput)
// app.component('r-input-search', rInputSearch)
// app.component('r-alert', rAlert)
// app.component('r-badge', rBadge)

  app.component('r-list', rList)
  app.component('r-item', rItem)
  app.component('r-pincode', rPincode)

  

  app.component('r-toggle', rToggle)
  app.component('r-color', rColor)


})


