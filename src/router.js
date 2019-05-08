import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Pictures from './components/Pictures.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/404/index.vue';

Vue.use( Router );

const routes = new Router( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: Pictures,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
} );

// защита роутеров Navigation Guards
routes.beforeEach( (
  to, from, next,
) => {

  const token = localStorage.getItem( 'token' );

  if ( to.fullPath === '/login' ) {

    if ( token !== null ) {

      next( '/dashboard' );

    }

  }

  if ( to.fullPath === '/dashboard' ) {

    if ( token === null ) {

      next( '/login' );

    }

  }

  next();

} );

export default routes;
