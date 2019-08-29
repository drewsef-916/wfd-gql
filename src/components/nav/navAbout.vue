<template>
  <div>
    <fa icon="question" class="icon has-menu" @click="navMenu"/>
    <div class="sort-menu menu-toggle">
        <p>Sort option 1</p>
        <p>Sort option 2</p>
        <p>Sort option 3</p>
        <p>Sort option 4</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recipeList'],
  methods: {
    navMenu: function() {
      console.log(this);
    }
  }
}
</script>

<style>
  .sort-menu {
    display: none;
  }
  .icon {
        font-size: 1.5rem;
        color: black;
  }
</style>


