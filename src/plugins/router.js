import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import VistaEventosView from '@/views/Eventos/VistaEventosView.vue'
import InscripcionesView from '@/views/Eventos/InscripcionesView.vue'

import VistaPersonaView from '@/views/Persona/VistaPersonaView.vue'


import VistaUsuariosView from '@/views/Usuarios/VistaUsuariosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/evento',
    name: 'evento',
    component: VistaEventosView
  },
  {
    path: '/evento/inscripcion',
    name: 'inscripcion',
    component: InscripcionesView
  },
  {
    path: '/persona',
    name: 'persona',
    component: VistaPersonaView
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: VistaUsuariosView
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
