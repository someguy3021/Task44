<template>
  <div class="v-catalog">
    <router-link :to="{name:'cart',params:{cart_data:CART}}">
      <h1 class="bigfont">Catalog</h1>
      <div class="v-catalog__link_to_cart">cart:{{ CART.length }}</div>
    </router-link>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS","CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Данные карточек получены");
      }
    });
  },
  watch: {},
};
</script>

<style lang="scss">
.v-catalog,
.v-catalog__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.v-catalog__link_to_cart{
  position: absolute;
  top:10px;
  right: 15px;
  padding: 15px;
}
</style>