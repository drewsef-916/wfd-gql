<template>
  <div>
    <fa icon="search" class="icon has-menu" @click="navMenu"/>
    <div class="search-menu menu-toggle">
        <input type="text" placeholder="Find a recipe">
    </div>
    <aside class="searchbox">
      <input type="text" placeholder="find a recipe..." @keyup="findMatches">
      <fa icon="times-circle" class="icon close" @click="buttonClose"/>
      <ul class="recipe-matches"></ul>
    </aside>
  </div>
</template>

<script>
export default {
  props: ['recipeList'],
  methods: {
    navMenu: function() {
      const searchBox = this.$el.lastChild;
      searchBox.style.display = "grid";
    },
    buttonClose: function() {
      this.$el.lastChild.style.display = "none";
    },
    findMatches: function() {
      let matchWord = this.$el.lastChild.firstChild.value;
      const recipeList = this.$props.recipeList;
      const suggestions = this.$el.lastChild.lastChild;
      let filteredList = recipeList.filter(recipe => {
        const regex = new RegExp(matchWord, 'gi');
        return recipe.name.match(regex)
      })
      if (!matchWord.length) filteredList = [];
      const html = filteredList.map(recipe => {
        return `
        <a href="/recipes/${recipe.id}">
            <li>${recipe.name}</li>
        </a>
        `
      }).join('')
      suggestions.innerHTML = html;
    },
  }
}
</script>

<style>
  .search-menu {
    display: none;
  }
  .icon {
        font-size: 1.5rem;
        color: black;
    }
  .searchbox {
    display: none;
    position: absolute;
    top: 26vh;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 10vh;
    width: 350px;
    background: white;
    border: 2px solid black;
    border-radius: 5px;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    font-size: 3rem;
  }
  .searchbox input {
    height: 3rem;
    font-size: 2rem;
    overflow: hidden;
  }
  .searchbox .close {
    width: 50%;
    margin: 0 auto;
    color: slategrey;
  }
  .recipe-matches {
    padding-left: 10px;
    margin-top: 30px;
  }
  .recipe-matches li {
    font-size: 1.5rem;
    padding: 10px 0;
    color: #494747;
    background-color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid black;
  }
  .recipe-matches a {
    text-decoration: none;
  }
</style>
