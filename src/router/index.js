import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/portfolio/:id",
      name: "ProjectDetail",
      component: ProjectDetail,
      props: true,
    },
    {
      path: "/contatct",
      name: "contatct",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
