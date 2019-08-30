import Vue from 'vue'
import Router from 'vue-router'
 import Home from './views/Home.vue';
 import got from './views/got.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/not',
      name: 'not', 
      component: () => import(/* webpackChunkName: "about" */ './views/not.vue')
    },{
      path: '/aou',
      name: 'aou', 
      component: () => import(/* webpackChunkName: "about" */ './views/aou.vue')
    },{
      path: '/korn',
      name: 'korn', 
      component: () => import(/* webpackChunkName: "about" */ './views/korn.vue')
    },{
      path: '/got',
      name: 'got', 
      component: got
    },{
      path: '/jj',
      name: 'jj', 
      component: () => import(/* webpackChunkName: "about" */ './views/jj.vue')
    },{
      path: '/aou1',
      name: 'aou1', 
      component: () => import(/* webpackChunkName: "about" */ './views/aou1.vue')
    
    },{
      path: '/Total',
      name: 'Total',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Total.vue')
    },{
      path: '/English',
      name: 'English',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/English.vue')
    },{
      path: '/Software',
      name: 'Software',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Software.vue')
    },{
      path: '/science',
      name: 'science',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/science.vue')
    },{
      path: '/math',
      name: 'math',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/math.vue')
    },{
      path: '/thai',
      name: 'thai',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/thai.vue')
    }
  
  
  
  
  
  ]
})
