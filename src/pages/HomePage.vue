<template>
  <div class="container">
    <Hero />
    <Cards />
  </div>
</template>

<script lang="ts">
import Hero from "../components/HomePage/Hero.vue";
import Cards from "../components/HomePage/Cards.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    Cards,
  },
};
</script>
