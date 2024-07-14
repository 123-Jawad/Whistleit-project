// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import LoginPage from '../views/LoginPage.vue'
// import Signuppage from '../views/Signuppage.vue'
// import DashboardView from '../views/DashboardView.vue'

// Vue.use(VueRouter)

// const router = new VueRouter({
//   mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'signup',
//       component: Signuppage
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: DashboardView
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: LoginPage
//     },
//   ]
// })

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import localforage from 'localforage';
// import LoginPage from '../views/LoginPage.vue';
// import Signuppage from '../views/Signuppage.vue';
// import DashboardView from '../views/DashboardView.vue';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'signup',
//       component: Signuppage
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: DashboardView
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: LoginPage
//     },
//   ]
// });

// // Navigation Guard
// router.beforeEach(async (to, from, next) => {
//   const store = await localforage.getItem('vuex');
//   const user = store && store.userModule ? store.userModule.user : null;

// /**
//  * 
//  */
//   if (!user || !user.email) {
//     if (to.name !== 'signup' && to.name !== 'login') {
//        next({ name: 'signup' });
//     }
//   } else {
//     if (to.name === 'signup' || to.name === 'login') {
//       return next({ name: 'dashboard' });
//     }
//   }
//   next();
// });

// export default router;


// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import localforage from 'localforage';
// import LoginPage from '../views/LoginPage.vue';
// import Signuppage from '../views/Signuppage.vue';
// import DashboardView from '../views/DashboardView.vue';

// Vue.use(VueRouter);

// const router = new VueRouter({
//   mode: 'history',
//   base: import.meta.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'signup',
//       component: Signuppage,
//     },
//     {
//       path: '/dashboard',
//       name: 'dashboard',
//       component: DashboardView,
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: LoginPage,
//     },
//   ],
// });

// // Navigation Guard
// router.beforeEach(async (to, from, next) => {
//   const userToken = localStorage.getItem('userToken');

//   if (!userToken) {
//     if (to.name !== 'signup' && to.name !== 'login') {
//        next({ name: 'signup' });
//     }else{
//       next();
//     }
//   } else {
//     if (to.name === 'signup' || to.name === 'login') {
//        next({ name: 'dashboard' });
//     }else{
//       next();
//     }
//   }
// });

// export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Signuppage from '../views/Signuppage.vue';
import DashboardView from '../views/DashboardView.vue';

Vue.use(VueRouter);

const requireUnauth = (to, from, next) => {
  const userToken = localStorage.getItem('userToken');
  if (userToken) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signuppage,
    beforeEnter: requireUnauth, 
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter: requireUnauth,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const userToken = localStorage.getItem('userToken');
  
  if (!userToken) {
    if (to.name !== 'signup' && to.name !== 'login') {
      next({ name: 'signup' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
