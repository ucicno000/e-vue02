import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/area',
      name: 'area',
      component: require('@/views/Area').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ] 
})
