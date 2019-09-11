<template>
  <div id="app">
    <headerNav/>
    <router-view></router-view>
    <!-- <recipes :recipeList="this.recipes"/> -->
  </div>
</template>

<script>
import recipes from './components/recipes'
import recipe from './components/recipe'
import headerNav from './components/headerNav'

export default {
  name: 'app',

  components: {
    headerNav,
    recipes,
    recipe,
  },

}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;

  }
  h1 {
    font-family: 'Handlee', cursive;
  }
  ul {
    list-style: none;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
