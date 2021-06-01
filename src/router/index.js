import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/donde-estamos',
    name: 'Ubicacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ubicacion.vue')
  },
  {
    path: '/productos',
    name: 'Productos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Productos.vue')
  },
  {
    path: "/detalle/:id",
    name: "DetalleInstrumento",
    component: () => import("../views/DetalleInstrumento.vue")
  },
  {
    path: '/crear',
    name: 'FormularioPost',    
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioPost.vue')
  },
  {
    path: '/editar/:id',
    name: 'FormularioPut',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormularioPut.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
