<template>
  <div id="app">
    <headerNav :recipeList="this.recipes"/>
    <router-view :recipeList="this.recipes"></router-view>
    <!-- <recipes :recipeList="this.recipes"/> -->
  </div>
</template>

<script>
import axios from 'axios'
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

  data() {
    return {
      recipes: [],
    }
  },

  async created() {
    this.getRecipes()
  },

  methods: {
    async getRecipes() {
      try {
        const res = await axios.post(`http://localhost:4000/graphql`, {
          query: `{
            recipes {
              id
              name
              ingredients
              directions
            }
          }`
        })
        this.recipes = res.data.data.recipes
      } catch (e) {
        this.recipes = ['An error occured']
      }
    },
  }

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
