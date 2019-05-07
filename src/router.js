import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';
import NotFound from './components/404/index.vue';
import store from './store';

Vue.use(Router);
console.log(store.state.admin.email !== '');
const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
});

routes.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    if (store.state.admin.email !== '') {
      next('/dashboard');
    }
  }
  if (to.fullPath === '/dashboard') {
    if (store.state.admin.email === '') {
      next('/login');
    }
  }
  next();
});

export default routes;
