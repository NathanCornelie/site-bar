import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome);

import AlcoolPage from "./components/AlcoolPage.vue";
import SoftPage from "./components/SoftPage.vue";
import Categories from "./components/Categories.vue";



const routes = [
  {
    path: "/alcool",
    name: "Alcool",
    component: AlcoolPage,
  },
  {
    path: "/soft",
    name: "Soft",
    component: SoftPage,
  },
  {
    path: "/",
    name: "Home",
    component: Categories,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
