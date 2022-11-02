import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import '../../static/base.css'

Vue.use(Router)

export const router = new Router({
  routes
  // mode: 'history'
})
/* 全局路由拦截 */
router.beforeEach((to, from, next) => {
  if (to.path === '/home') {
    next()
  } else {
    next({path: '/home'})
  }
})
export default router
