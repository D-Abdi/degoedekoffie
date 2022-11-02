<template>
  <div class="container mx-auto max-w-7xl">
    <Navigation />
    <ProductView />
    <Footer />
  </div>
</template>

<script>
import Navigation from ".././../../components/Global/Navigation.vue";
import ProductView from "../../../components/ProductsPage/ProductPage/ProductView.vue";
import Footer from ".././../../components/Global/Footer.vue";

export default {
  name: "Product",
  components: {
    Navigation,
    ProductView,
    Footer,
  }
};
</script>