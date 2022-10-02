<template>
  <div class="container">
    <div class="mb-20">
      <Hero />
    </div>
    <div class="mt-20">
      <Cards />
    </div>
    <div class="mt-20">
      <Testimonial />
    </div>
    <div class="mt-20">
      <Products />
    </div>
    <div class="mt-20">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from "../components/Global/Navigation.vue";
import Hero from "../components/HomePage/Hero.vue";
import Cards from "../components/HomePage/Cards.vue";
import Testimonial from "../components/HomePage/Testimonial.vue";
import Products from "../components/HomePage/Products.vue";
import Footer from "../components/Global/Footer.vue";

export default {
  name: "HomePage",
  components: {
    Navigation,
    Hero,
    Cards,
    Testimonial,
    Products,
    Footer,
  },
};
</script>
