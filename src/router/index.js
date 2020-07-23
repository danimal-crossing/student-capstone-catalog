import Vue from 'vue';
import VueRouter from 'vue-router';
import CapstonesShow from '../views/CapstonesShow.vue';
import CapstonesIndex from '../views/CapstonesIndex.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/capstones',
    name: 'capstones-index',
    component: CapstonesIndex
  },
  {
    path: '/capstones/:id',
    name: 'capstones-show',
    component: CapstonesShow
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
