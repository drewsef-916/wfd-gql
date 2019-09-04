<template>
    <main class="recipe-container">
        <div class="recipe" v-for="recipe in recipeList" v-bind:key="recipe.id">
          <h1 @click="viewOneRecipe">{{recipe.name}}</h1>
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
            <li v-for="direction in recipe.directions" v-bind:key="direction.index">
              {{direction}}
            </li>
          </ul>
        </div>
    </main>
</template>

<script>
/* eslint-disable */
export default {
  props: ['recipeList'],
  methods: {
    viewOneRecipe: function() {
      let singleRecipe = this.recipeList.filter(recipe => {
        return recipe.name === event.target.innerHTML
      })
      this.recipeList = singleRecipe
    }
  }
}
</script>

<style scoped>
  ul {
    padding: 0 1rem;
  }
  .recipe-container {
    margin-top: 17vh;
  }
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid darkgray;
    border-radius: 10px;
    margin: 2rem;
  }
</style>

