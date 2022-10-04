<template>
  <div class="container mx-auto max-w-7xl">
    <div>
      <Navigation />
    </div>
    <div>
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Global/Navigation.vue";
import ProductsGrid from "../components/ProductsPage/ProductsGrid.vue";

export default {
  name: "ProductsPage",
  components: {
    Navigation,
    ProductsGrid,
  },
};
</script>
