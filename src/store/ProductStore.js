import { defineStore } from 'pinia';
import { supabase } from "../supabase";

export const useProductsStore = defineStore('productManager', {
    state: () => {
        return { products: [] }
    },

    actions: {
        async retrieveProducts() {
            const { data, error } = await supabase
                .from("products").select()

            if (error) {
                alert(error);
            } else {
                this.products = data;
                console.log(this.products, "Product")
            }
        }
    }
})