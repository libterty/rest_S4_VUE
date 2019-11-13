import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
