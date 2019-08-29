<template>
  <div id="app">
    <h2>GraphQL Test</h2>
    <section>
      <input type="text" ref="singleRecipe">
      <button @click="getRecipe">Get One Recipe</button>
      <recipe :recipe="this.recipe"/>
    </section>
    <allRecipes :recipeList="this.recipes"/>
  </div>
</template>

<script>
import axios from 'axios'
import allRecipes from './components/allRecipes'
import recipe from './components/recipe'

export default {
  name: 'app',

  components: {
    allRecipes,
    recipe,
  },

  data() {
    return {
      recipes: [],
      recipe: {}
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
    async getRecipe() {
      try {
        const res = await axios.post(`http://localhost:4000/graphql`, {
          query: `
          query recipe($id: String!) {
            recipe(id: $id) {
              name
              ingredients
              directions
            }
          }`,
          variables: {
            id: this.$refs.singleRecipe.value
          }
        })
        this.recipe = res.data.data.recipe
      } catch(e) {
        this.recipe = 'An error occured'
      }
    }
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
