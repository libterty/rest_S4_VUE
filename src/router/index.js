import Vue from 'vue';
import VueRouter from 'vue-router';
// import store from '../store';
import NotFound from '../views/NotFound.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import Restaurants from '../views/Restaurants.vue';
const credit = JSON.parse(localStorage.getItem('credit'));

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants' 
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/restaurants/create',
    name: 'admin-restaurant-create',
    component: () => import('../views/AdminRestaurantCreate.vue')
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
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
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'RestaurantsDashboard',
    component: () => import('../views/RestaurantsDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'UsersTop',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'UsersProfile',
    component: () => import('../views/UsersProfile.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes
});

router.beforeEach(async (to, from , next) => {
  if(!credit && to.name !=='SignIn' && to.name !=='SignUp') {
    next('/signin');
    return;
  }

  if (credit) {
    if (to.name === 'SignIn' || to.name === 'Signup') {
      next('/restaurants');
      return;
    }
  }

  if (credit && credit.user.isAdmin === false) {
    if (to.path.includes('/admin')) {
      next('/404');
      return;
    }
  }

  next();
})

export default router;
