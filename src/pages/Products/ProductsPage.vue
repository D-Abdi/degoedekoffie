<template>
  <div class="container mx-auto max-w-7xl">
    <div class="mb-10">
      <Navigation />
    </div>
    <ProductsTitle />
    <ProductsGrid />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../components/Global/Navigation.vue";
import ProductsTitle from "../../components/ProductsPage/ProductsTitle.vue";
import ProductsGrid from "../../components/ProductsPage/ProductsGrid.vue";
import Footer from "../../components/Global/Footer.vue";

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
