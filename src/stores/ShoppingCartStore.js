import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useShoppingCartStore = defineStore("shoppingCartManager", {
  state: () => {
    return { shoppingCart: [], totalPrice: 0};
  },

  actions: {
    getCart() {
        console.log(this.shoppingCart, "GET");
    },

    getTotalPrice() {
      if (this.shoppingCart && this.shoppingCart.length > 0) {
        let total = 0

        for (let item of this.shoppingCart) {
          total += item.price;
        }

        this.totalPrice = total;
      }
      else {
        this.totalPrice = 0;
      }
      console.log(this.totalPrice, "Total price")
    },

    addToCart(item) {
      this.shoppingCart.push(item);
    },

    removeFromCart(item) {
      const shoppingCartCopy = JSON.parse(JSON.stringify(this.shoppingCart));

      shoppingCartCopy.filter((x) => x.id !== item.id);
      
      this.shoppingCart = shoppingCartCopy;
    }
  },
});
