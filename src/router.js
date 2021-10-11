import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import RegistroEstablecimiento from './views/RegistroEstablecimiento.vue'
import TmpltComerciante from './views/TmpltComerciante.vue'
import Secure from './components/Secure.vue'

Vue.use(Router)
let router = new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comerciante',
      name: 'comerciante',
      component: TmpltComerciante,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/registroUser',
      name: 'registroUser',
      component: function () { 
        return import(/* webpackChunkName: "about" */ '@/views/RegistroUser.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    /*RUTAS SEGURAS */
    
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/registroEstablecimiento',
      name: 'registroEstablecimiento',
      component: RegistroEstablecimiento,
      meta: { 
        requiresAuth: true
      }
    },
  ]
})
export default router;
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})
