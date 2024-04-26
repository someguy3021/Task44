<template>
  <div>
    
    <div class="v-cart-item">
      <img class="v-cart-item__img" :src="require('../assets/images/' + cart_item_data.image)" alt=""/>
      <div>
      <p class="v-catalog-item__name">{{cart_item_data.name}}</p>
      <p class="v-catalog-item__price">{{cart_item_data.price}}</p>
      <p class="v-catalog-item__price">{{cart_item_data.article}}</p>
      <p class="v-catalog-item__about">{{cart_item_data.about}}</p>
      </div>
      <div class="v-cart-item__quantity">
      <p>Quantity</p>
      <span>{{cart_item_data.quantity}}</span>
    </div>
    <button @click="deleteFromCart" class="waves-effect waves-light btn">Delete</button>
    </div>

  </div>
  </template>
  
  <script>
  export default {
    name:"v-cart-item",
    props:{
      cart_item_data:{
        type: Object,
        default(){
          return{};
        },
      },
    },
    data(){
      return {
        title:"CartItemHello",
      };
    },
    computed:{},
    methods:{
      deleteFromCart(){
        this.$emit("deleteFromCart");
      },
    },
    watch:{},
    mounted(){
      console.log("hello log");
    },
  }
  </script>
  
  <style lang="scss">
  .v-cart-item{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 grey;
    background-color:#fff;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    &__img{
      max-width: 100%;
    }
  }
  </style>