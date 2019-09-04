<template>
  <div>
    <aside class="searchbox-calendar">
      <div class="dropdown-container">
        <p>Show me recipes I haven't had in:</p>
        <select @change="filterRecipes">
          <option value="1">A month</option>
          <option value="2">2 months</option>
          <option value="3">3 months</option>
          <option value="6">6 months</option>
          <option value="Even longer!">Even longer!</option>
        </select>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    navMenu: function() {
      const searchBox = this.$el.lastChild;
      searchBox.style.display = "grid";
    },
    buttonClose: function() {
      this.$el.lastChild.style.display = "none";
    },
    filterRecipes: function() {
      console.log(this);
    }
  }
}
</script>

<style>

  .icon {
        font-size: 1.5rem;
        color: black;
    }

  .searchbox-calendar {
    display: none;
    position: absolute;
    top: 28vh;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 12vh;
    width: 350px;
    background: white;
    border: 2px solid black;
    border-radius: 5px;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    font-size: 3rem;
  }

  .dropdown-container {
    display: grid;
    grid-template-rows: 30% 70%;
    align-items: center;
  }

  .searchbox-calendar input {
    height: 3rem;
    font-size: 2rem;
    overflow: hidden;
  }

  .searchbox-calendar p {
    font-size: 1rem;
  }

  .searchbox-calendar .close {
    width: 50%;
    margin: 0 auto;
    color: slategrey;
    align-self: start;
    padding-top: 1rem;
  }
</style>
