import {
  createRouter,
  createWebHashHistory,
  useRouter,
  useRoute,
} from "vue-router";

import Home from "./views/Home.vue";
import Search from "./views/SearchPage.vue";
import Developer from "./views/Developer.vue";
import Form from "./views/Form.vue";
import Copyright from "./views/Copyright.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/developer",
    name: "developer",
    component: Developer,
  },
  {
    path: "/form",
    name: "form",
    component: Form,
  },
  {
    path: "/copyright",
    name: "copyright",
    component: Copyright,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
