
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/pick', alias:'', component: () => import('pages/Pick.vue') },
      { path: '/pack', component: () => import('pages/Pack.vue') },
      { path: '/ride', component: () => import('pages/Ride.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
