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
  </div>
</template>

<script lang="ts">
import Hero from "../components/HomePage/Hero.vue";
import Cards from "../components/HomePage/Cards.vue";
import Testimonial from "../components/HomePage/Testimonial.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    Cards,
    Testimonial,
  },
};
</script>
