import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = {
  home: 'home',
  new: 'new',
  detail: 'detail'
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: routes.home,
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      meta: {
        title: 'Home view'
      }
    },
    {
      path: '/new',
      name: routes.new,
      component: () => import(/* webpackChunkName: "about" */ './views/New.vue'),
      meta: {
        title: 'Nuevo anime'
      }
    },
    {
      path: '/detail/:id',
      name: routes.detail,
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue'),
      meta: {
        title: 'Detail view'
      }
    },
    {
      path: '/',
      redirect: { name: routes.home }
    }
  ]
})
