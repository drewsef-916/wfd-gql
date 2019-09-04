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
    <div v-for="recipe in recipeList" v-bind:key="recipe.id">
      <h5>{{recipe.name}}</h5>
    </div>
    </div>
</template>

<script>
export default {
  data: function() {
    recipe: {}
  },
  created: async function() {
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
          id: this.$route.split('/')[1]
        }
      })
      this.recipe = res.data.data.recipe
    } catch(e) {
      this.recipe = 'An error occured'
    }
  }
}
</script>
