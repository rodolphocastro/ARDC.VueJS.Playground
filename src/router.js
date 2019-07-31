import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import VueRouter from 'vue-router';
import store from '@/store.js';

Vue.use(VueRouter);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})

export default router;
