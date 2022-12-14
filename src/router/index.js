import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainView,
    },
    {
      path: "/owner",
      name: "Own",
      children: [
        {
          path: "",
          name: "Owner",
          component: () => import("../views/OwnerHome.vue"),
        },
        {
          path: "info",
          name: "Ownerinfo",
          component: () => import("../views/OwnerInfo.vue"),
        },
        {
          path: "house",
          name: "House",
          component: () => import("../views/HouseView.vue"),
        },
        {
          path: "charge",
          name: "Chargeo",
          component: () => import("../views/ChargeView.vue"),
        },
        {
          path: "state",
          name: "State",
          component: () => import("../views/StateView.vue"),
        },
      ],
    },
    {
      path: "/tenant",
      name: "Ten",

      children: [
        {
          path: "",
          name: "Tenant",
          component: () => import("../views/TenantHome.vue"),
        },
        {
          path: "info",
          name: "Tenantinfo",
          component: () => import("../views/TenantInfo.vue"),
        },
        {
          path: "rent",
          name: "Rent",
          component: () => import("../views/RentView.vue"),
        },
        {
          path: "charge",
          name: "Charget",
          component: () => import("../views/ChargeView.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
