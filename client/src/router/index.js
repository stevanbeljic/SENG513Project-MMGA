import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import signUpView from '../views/SignUpView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUpView
    }
  ]
})

export default router
