import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./router/Routes";
import "./style.css";
import "./assets/css/main.css";

import Home from "./pages/HomePage.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

createApp(App).use(router).mount("#app");
