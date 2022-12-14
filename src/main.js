import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./router/Routes";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from 'pinia'
import "./style.css";
import "./assets/css/main.css";

import Home from "./pages/Home/HomePage.vue";
import App from "./App.vue";

const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: Routes,
});

createApp(App).use(router).use(pinia).use(MotionPlugin).mount("#app");
