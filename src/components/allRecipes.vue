<template>
  <div class="page-wrapper">
    <main class="recipe-container">
        <div class="recipe" v-for="recipe in recipeList" v-bind:key="recipe.id">
          <nuxt-link :to="{name: 'recipes-id', params: {id: recipe.id}}">
            <h3>{{recipe.name}}</h3>
          </nuxt-link>
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
  </div>
</template>

<script>
export default {
  props: ['recipeList'],
}
</script>

