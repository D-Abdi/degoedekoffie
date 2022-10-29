import HomePage from "../pages/Home/HomePage.vue";
import ProductsPage from "../pages/Products/ProductsPage.vue";
import ProductPage from "../pages/Products/ProductPage/ProductPage.vue";

export const Routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products", name: "Products", component: ProductsPage },
  { path: "/product", name: "Product", component: ProductPage },
];
