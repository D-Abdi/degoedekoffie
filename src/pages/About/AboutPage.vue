<template>
    <div class="container mx-auto max-w-7xl">
        <Navigation />
        <section class="container mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font custom-color-secondary">
                    Over ons
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
                    Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                    gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                    heard of them man bun deep jianbing selfies heirloom.
                </p>
            </div>
        </section>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
                </div>
                <div
                    class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium custom-color-secondary">Before they sold out
                        <br class="hidden lg:inline-block">readymade gluten
                    </h1>
                    <p class="leading-relaxed text-gray-400">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                </div>
            </div>
        </section>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div
                    class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium custom-color-secondary">Before they sold out
                        <br class="hidden lg:inline-block">readymade gluten
                    </h1>
                    <p class="leading-relaxed text-gray-400">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
                </div>
            </div>
        </section>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-64 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
                </div>
                <div
                    class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium custom-color-secondary">Before they sold out
                        <br class="hidden lg:inline-block">readymade gluten
                    </h1>
                    <p class="leading-relaxed text-gray-400">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot
                        chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                </div>
            </div>
        </section>
        <Footer />
    </div>
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
