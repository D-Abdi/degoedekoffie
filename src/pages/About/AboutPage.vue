<template>
    <Navigation />
        <h1>About Page</h1>
    <Footer />    
</template>

<script>
import Navigation from "../../components/Global/Navigation.vue";
import Footer from "../../components/Global/Footer.vue";

    export default {
        name: "About",
        components: {
            Navigation,
            Footer
        }
    }
</script>
