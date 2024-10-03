import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GamesLibrary from "@/views/GamesLibrary.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gamesLibrary",
      name: "games-lib",
      component: GamesLibrary,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
