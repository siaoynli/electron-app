import { createWebHashHistory, createRouter } from 'vue-router'
import { routes } from './routes'
import { beforeEach, afterEach } from '@router/guards'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(beforeEach)

router.afterEach(afterEach)

export default router
