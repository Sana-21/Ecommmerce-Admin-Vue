import { createWebHistory, createRouter } from "vue-router";
import ProductReg from '@/views/ProductReg.vue'
import Dashboard from '@/views/Dashboard.vue'
import Inventory from '@/views/Inventory.vue'

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/product",
    name: "Product",
    component: ProductReg,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;