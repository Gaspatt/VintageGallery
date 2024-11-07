import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarDetailView from '../views/CarDetailView.vue';
import CarsView from '@/views/CarsView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import LoginView from '@/views/LoginView.vue'
import CadastrarView from '@/views/CadastrarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/car/:id',
      name: 'car-detail',
      component: CarDetailView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoriteView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: CadastrarView
    }
  ]
})

export default router
