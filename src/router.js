import Vue from 'vue';
import Router from 'vue-router';

import UserProfileLite from './views/UserProfileLite.vue';
import HomePage from "./views/HomePage.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: "home",
      component: HomePage
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileLite,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});
