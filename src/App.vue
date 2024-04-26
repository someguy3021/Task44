<template>
  <div id="app">
    <vMainWrapper/>
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper.vue'
export default {
  name:"app",
  components:{
    vMainWrapper
  }
};
</script>


<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "~materialize-css/dist/css/materialize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: black;
}
html{
  min-height: 100%;
  background-image: linear-gradient( 135deg, #e4c8ff 10%, #a9a1fa 100%);
}
.bigfont{
  font-family: 'Courier New', Courier, monospace;
}
</style>
