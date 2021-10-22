import { boot } from 'quasar/wrappers'
import rBtn from '../components/ui/r-btn.vue'
import rCard from '../components/ui/r-card.vue'
// import rBtnCard from '../components/ui/r-btncard.vue'
// import rInput from '../components/ui/r-input.vue'
// import rInputSearch from '../components/ui/r-input-search.vue'
// import rAlert from '../components/ui/r-alert.vue'
// import rBadge from '../components/ui/r-badge.vue'

// import rList from '../components/ui/r-list.vue'
// import rItem from '../components/ui/r-list-item.vue'
// import rToggle from '../components/ui/r-toggle.vue'



export default boot(async ({ app }) => {
  app.component('r-btn', rBtn)
  app.component('r-card', rCard)
  

  // Vue.component('r-btncard', rBtnCard)
// Vue.component('r-input', rInput)
// Vue.component('r-input-search', rInputSearch)
// Vue.component('r-alert', rAlert)
// Vue.component('r-badge', rBadge)

// Vue.component('r-list', rList)
// Vue.component('r-item', rItem)

// Vue.component('r-toggle', rToggle)

// const EmptySlot = {
//   functional: true,
//   render: (h, { data }) => h('template', data, '')
// }

// Vue.component('r-empty', EmptySlot)


})


