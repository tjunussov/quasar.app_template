
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '/pick', alias:'', component: () => import('pages/Pick.vue') },
  //     { path: '/pack', component: () => import('pages/Pack.vue') },
  //     { path: '/ride', component: () => import('pages/Ride.vue') },
  //     { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
  //   ]
  // },
  { path: '/pick', alias:'', component: () => import('pages/Pick.vue') },
  { path: '/pack', component: () => import('pages/Pack.vue') },
  { path: '/ride', component: () => import('pages/Ride.vue') },

  { path: '/settings', component: () => import('pages/Settings.vue') },
  { path: '/dialog', component: () => import('src/components/ui/r-dialog.vue') },
  { path: '/dashboard', component: () => import('pages/Dashboard.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Pick.vue')
  }
]

export default routes
