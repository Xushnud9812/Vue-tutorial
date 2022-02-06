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
    path: '/about',
    name: 'About',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/counter',
    name: 'counter',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/counter.vue')
    }
  },
  {
    path: '/todo',
    name: 'todo',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/todo.vue')
    }
  },
  {
    path: '/tictac',
    name: 'tictac',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/tictac.vue')
    }
  },
  {
    path: '/quizz',
    name: 'quizz',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/quizz.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
