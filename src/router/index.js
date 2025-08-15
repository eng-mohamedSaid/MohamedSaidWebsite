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
      path: "/projects",
      name: "projects",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/projects/:id",
      name: "ProjectDetail",
      component: ProjectDetail,
      props: true,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/AllArticles.vue"),
    },
    {
      path: "/articles/:slug",
      name: "article",
      component: () => import("../views/ArticleView.vue"),
      props: true,
    },
  ],
});

export default router;
