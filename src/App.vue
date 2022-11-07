<script setup>
import { useProductsStore } from './stores/ProductStore';
import { useShoppingCartStore } from './stores/ShoppingCartStore';
const productManager = useProductsStore();
const shoppingCartManager = useShoppingCartStore();

shoppingCartManager.getCart();

if (productManager.products.length === 0) {
  productManager.retrieveProducts()
}

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
