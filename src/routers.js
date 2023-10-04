import Signup from './components/Sign-up.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name:'Home',
    
    path: '/',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    name:'signup',
    path: '/signup',
    component: Signup
  },
  {
    name:'add',
    path: '/add',
    component: Add
  },
  {
    name:'update',
    path: '/update',
    component: Update
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;