<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__img" :src="require('../assets/images/' + product_data.image)" alt=""/>
        <h5 class="v-catalog-item__name">{{product_data.name}}</h5>
        <p class="v-catalog-item__about">{{product_data.about}}</p>
        <div class="v-catalog-item__footer">
            <div><p class="v-catalog-item__price wcf-left">{{product_data.price}} RUB</p></div>
            <div class="v-catalog-item__footer_btn"><button class="v-catalog-item__add_to_cart_btn waves-effect waves-light btn wcf-right" @click="addToCart">Add to</button></div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"v-catalog-item",
      props:{
        product_data:{
            type:Object,
            default(){
                return{};
            }
        }
      },
      data(){
          return{};
      },
      methods:{
        addToCart(){
            this.$emit("addToCart", this.product_data)
        }
      }
  }
  </script>
  
  <style lang="scss">
    .v-catalog-item{
        flex-basis: 40%;
        box-shadow: 0 0 8px 0 grey;
        background-color:#fff;
        padding: 20px;
        margin: 20px;
        border-radius: 15px;
    }
    .v-catalog-item__img{
        max-width: 100%;
        display: block;
        margin: 0% auto;
    }
    .v-catalog-item__footer{
        padding: 10px 0 5px;
        border-top: 1px solid #ddd;
        align-items: center;
        min-height: 20%;
    }
    .v-catalog-item__footer_btn{
        padding: 10px 0 5px;
        align-items: center;
        min-height: 20%;
    }
    .v-catalog-item__footer .wcf-left{
        float:left;
    }
    .v-catalog-item__footer .wcf-right{
        float:right;
    }
    .v-catalog-item__price{
        font-size:18px;
        font-weight:bold;
    }
    .v-catalog-item__name{
        font-weight: bold;
    }
  </style>