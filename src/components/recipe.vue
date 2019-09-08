<template>
  <div class="page-wrapper">
      <main class="recipe-container">
        <div class="recipe">
          <h3>{{recipe.name}}</h3>
          <ul class="ingredients">
            <h5>Ingredients</h5>
            <hr>
            <li v-for="ingredient in recipe.ingredients" v-bind:key="ingredient.index">
              {{ingredient}}
            </li>
          </ul>
          <ul class="directions">
            <h5>Directions</h5>
            <hr>
            <li v-for="(direction) in recipe.directions" v-bind:key="direction.index">
              {{direction}}
            </li>
          </ul>
        </div>
    </main>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      recipe: {}
    }
  },
  created: async function() {
    const recipeId = this.$route.path.split('/')[2]
    console.log(recipeId)
    try {
      const res = await axios.post(`http://localhost:4000/graphql`, {
        query: `
        query recipe($id: String!) {
          recipe(id: $id) {
            id
            name
            ingredients
            directions
          }
        }`,
        variables: {
          id: recipeId
        }
      })
      console.log(res)
      this.recipe = res.data.data.recipe
    } catch(e) {
      this.recipe = 'An error occured'
    }
  }
}
</script>
