import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Restaurants from '../views/Restaurants.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants' 
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/top',
    name: 'RestaurantsTop',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/feeds',
    name: 'RestaurantsFeeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/users/top',
    name: 'UsersTop',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
