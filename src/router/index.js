import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginView from "../views/LoginView.vue" ;
import PurchaseView from "../views/PurchaseView.vue" ;
import CartView from "../views/CartView.vue" ;

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Login',
    component: LoginView
  },
  {
    path: '/purchase',
    component: PurchaseView
  },
  {
    path: '/cart',
    component: CartView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;