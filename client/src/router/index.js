import catalogView from '@/views/catalogView.vue'
import GameOverview from '@/views/gameOverview.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddGameView from '../views/AddGameView.vue'
import CommentView from "../views/CommentView.vue"
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import signUpView from '../views/SignUpView.vue'
import addFriendView from '../views/addFriendView.vue'
import discussionView from '../views/discussionView.vue'
import editProfileView from '../views/editProfileView.vue'
import friendRequestView from '../views/friendRequestView.vue'
import friendsView from '../views/friendsView.vue'
import postView from '../views/postView.vue'
import profileView from '../views/profileView.vue'
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
      path: '/game/:id',
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
      path: '/addGame',
      name: 'addGame',
      component: AddGameView
    },
    {
      path: '/discussionpost',
      name: 'discussionpost',
      component: postView
    },
    {
      path: '/comment',
      name: 'comment',
      component: CommentView
    },
    {
      path: '/friendRequest',
      name: 'friendRequest',
      component: friendRequestView
    },
    {
      path: '/addFriend',
      name: 'addFriend',
      component: addFriendView
    }
  ]
})

export default router
