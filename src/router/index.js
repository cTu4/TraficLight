import { createRouter, createWebHashHistory } from "vue-router";

// Components pages
// import TraficLight from "@/components/TraficLight.vue";
import TraficLight from "./components/TraficLight.vue";



const routes = [
  {
    path: "/",
    redirect: "/:color",
    children: [
      {
        path: "/:color",
        name: "color",
        components: { default: TraficLight },
      }
    ],
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
