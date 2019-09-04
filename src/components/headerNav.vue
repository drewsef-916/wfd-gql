<template>
    <div class="header-container">
        <navSearch :recipeList="this.recipes"/>
        <router-link to="/">
            <img class="logo" src="../assets/wfd-logo.png"/>
        </router-link>
        <h1>Converter</h1>
    </div>
</template>

<script>
import navSearch from '../components/nav/navSearch.vue';
// import navCalendar from '../components/nav/navCalendar.vue';

export default {
    props: ['recipeList'],
    components: {
        navSearch,
        // navCalendar
    },
    data: function() {
        return {
            recipes: this.$props.recipeList,
        }
    },
}
</script>

<style scoped>
    .header-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        align-items: center;
        height: 15vh;
        width: 100vw;
        border: 1px solid black;
        background: #fff;
        position: fixed;
        top: 0;
        margin-bottom: 15vh;
    }

    .logo {
        max-height: 12vh;
    }

</style>