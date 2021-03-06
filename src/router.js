import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';

import Home from './views/Home.vue';

Vue.use(VueRouter);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'apidocs',
      component: () => import('./views/Docs.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About')
    },
    {
      path: '/games',
      component: () => import('./views/Games.vue'),
      children: [
        {
          path: '',
          name: 'gameslist',
          component: () => import('./components/games/GamesList.vue')
        },
        {
          path: 'add',
          name: 'gamecreate',
          component: () => import('./components/games/GameCreate.vue')
        },
        {
          path: 'view/:id',
          name: 'gamedetail',
          component: () => import('./components/games/GameDetails.vue')
        },
        {
          path: 'edit/:id',
          name: 'gameedit',
          component: () => import('./components/games/GameEdit.vue')
        }
      ]
    },
    {
      path: '/reviews',
      component: () => import('./views/Reviews.vue'),
      children: [
        {
          path: '',
          name: 'reviewsList',
          component: () => import('./components/reviews/ReviewList.vue')
        },
        {
          path: 'add',
          name: 'reviewsCreate',
          component: () => import('./components/reviews/ReviewCreate.vue')
        },
        {
          path: 'view/:id',
          name: 'reviewsDetail',
          component: () => import('./components/reviews/ReviewDetails.vue')
        },
        {
          path: 'edit/:id',
          name: 'reviewsEdit',
          component: () => import('./components/reviews/ReviewEdit.vue')
        }
      ]
    }
  ]
})

export default router;
