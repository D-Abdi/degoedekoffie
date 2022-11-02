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

import { supabase } from "../../../supabase.js"

export default {
  name: "Product",
  components: {
    Navigation,
    ProductView,
    Footer,
  },
  methods: {
    retrieveProoduct: async () => {
      const {data, error} = await supabase.from("products").select()
      await console.log(data, "DATA")
    }
  },
  mounted() {
    console.log("LOG");
    this.retrieveProoduct()
  },
};
</script>