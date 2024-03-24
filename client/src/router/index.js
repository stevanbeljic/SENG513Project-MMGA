import catalogView from '@/views/catalogView.vue'
import GameOverview from '@/views/gameOverview.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import signUpView from '../views/SignUpView.vue'
import discussionView from '../views/discussionView.vue'
import friendsView from '../views/friendsView.vue'
import profileView from '../views/profileView.vue'
import editProfileView from '../views/editProfileView.vue'
import postView from '../views/postView.vue'
import addGame from '../views/addGame.vue'
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
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalogView
    },
    {
      path: '/game',
      name: 'game',
      component: GameOverview
    },
    {
      path: '/friends',
      name: 'friends',
      component: friendsView
    },
    {
      path: '/discussions',
      name: 'discussions',
      component: discussionView
    },
    {
      path: '/profile',
      name: 'profile',
      component: profileView
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: editProfileView
    },
    {
      path: '/discussionpost',
      name: 'discussionpost',
      component: postView
    },
    {
      path: '/addgame',
      name: 'addgame',
      component: addGame
    }
  ]
})

export default router
