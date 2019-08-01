import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';
import store from '@/store.js';

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
            path: '/games',
            name: 'games',
            component: () => import('./views/Games.vue')
        }
    ]
})

export default router;
