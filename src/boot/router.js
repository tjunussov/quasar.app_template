import { boot } from 'quasar/wrappers'

export default boot(({ router, store }) => {

  // Path restoration
  // let isFirstTransition = true

  // router.afterEach(to => {
  //   if(!(to.meta && to.meta.hidden)) store.commit('set', { type: 'navigation', value:to.path });
  // })

  router.beforeEach((to, from, next) => {
    next()
  })
})