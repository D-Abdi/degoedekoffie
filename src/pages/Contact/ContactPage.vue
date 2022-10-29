<template>
    <div class="container mx-auto max-w-7xl">
        <Navigation />
        <h1>Contact Page</h1>
        <Footer />
    </div>
</template>

<script>
import Navigation from "../../components/Global/Navigation.vue";
import Footer from "../../components/Global/Footer.vue";

export default {
    name: "Contact",
    components: {
        Navigation,
        Footer
    }
}
</script>