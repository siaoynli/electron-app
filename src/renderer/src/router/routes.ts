export const routes = [
  { path: '/', component: () => import('@view/Home.vue') },
  { path: '/about', component: () => import('@view/About.vue') }
]
