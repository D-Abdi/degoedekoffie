import HomePage from "../pages/HomePage.vue";
import ProductsPage from "../pages/ProductsPage.vue";

export const Routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products", name: "Products", component: ProductsPage },
];
