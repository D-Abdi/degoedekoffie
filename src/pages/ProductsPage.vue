<template>
  <div class="container mx-auto max-w-7xl">
    <div>
      <Navigation />
    </div>
    <div>
      <ProductsTitle />
    </div>
    <div>
      <ProductsGrid />
    </div>
    <div class="mt-20">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Global/Navigation.vue";
import ProductsTitle from "../components/ProductsPage/ProductsTitle.vue";
import ProductsGrid from "../components/ProductsPage/ProductsGrid.vue";
import Footer from "../components/Global/Footer.vue";

export default {
  name: "ProductsPage",
  components: {
    Navigation,
    ProductsTitle,
    ProductsGrid,
    Footer,
  },
};
</script>
