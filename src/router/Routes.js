import HomePage from "../pages/Home/HomePage.vue";
import ProductsPage from "../pages/Products/ProductsPage.vue";
import ProductPage from "../pages/Products/ProductPage/ProductPage.vue";
import AboutPage from "../pages/About/AboutPage.vue";
import ContactPage from "../pages/Contact/ContactPage.vue";

export const Routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products", name: "Products", component: ProductsPage },
  { path: "/product", name: "Product", component: ProductPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/contact", name: "Contact", component: ContactPage },
];
