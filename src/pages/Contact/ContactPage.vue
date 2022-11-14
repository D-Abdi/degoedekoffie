<template>
  <div class="container mx-auto max-w-7xl">
    <div class="mb-10">
      <Navigation />
    </div>
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import Navigation from "../../components/Global/Navigation.vue";
import ContactForm from "../../components/ContactPage/ContactForm.vue";
import Footer from "../../components/Global/Footer.vue";

export default {
  name: "Contact",
  components: {
    Navigation,
    ContactForm,
    Footer,
  },
};
</script>