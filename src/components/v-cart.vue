<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog'}">
      <h1>Cart</h1>
      <div class="v-catalog__link_to_cart">
        <i class="medium material-icons">shopping_cart</i>
        {{ CART.length }}</div>
      <button class="waves-effect waves-light btn">Back to Catalog</button>
    </router-link>
    
    <p v-if="!CART.length">The cart is empty!</p>

    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>
  
  <script>
import vCartItem from "./v-cart-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
      console.log(index);
    },
  },
};
</script>
  
<style scoped lang="scss">
.v-cart {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: grey;
  font-size: 20px;
  margin-bottom: 40px;
}
p {
  text-align: center;
  font-size: 20px;
}
</style>