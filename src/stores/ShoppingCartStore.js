import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useShoppingCartStore = defineStore("shoppingCartManager", {
  state: () => {
    return { shoppingCart: [] };
  },

  actions: {
    getCart() {
        console.log(this.shoppingCart, "GET");
    },

    addToCart(item) {
      console.log(item, "ITEM");
      this.shoppingCart.push(item);
      console.log(this.shoppingCart, "SC");
    },
  },
});
