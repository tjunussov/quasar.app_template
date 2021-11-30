import Home from 'pages/Home.vue'


const routes = [
  { path: '/home', name:'home', alias:'', component: Home },
  { path: '/settings', name:'settings', component: () => import('pages/settings/Settings.vue'), meta: { hidden:true }  },
  
  { path: '/pinpad', name:'login', component: () => import('pages/settings/PinPad.vue'), meta: { hidden:true }  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Home.vue')
  }
]

export default routes

