<template>
    <div class="header-container">
        <navSearch :recipeList="this.recipes"/>
        <router-link to="/about">
            <navAbout :recipeList="this.recipes"/>
        </router-link>
        <router-link to="/">
            <img class="logo" src="~/assets/wfd-logo.png"/>
        </router-link>
        <navCalendar :recipeList="this.recipes"/>
        <div>
            <router-link to="/newRecipe">
                <fa icon="plus" class="icon"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import navAbout from '~/components/nav/navAbout.vue';
import navSearch from '~/components/nav/navSearch.vue';
import navCalendar from '~/components/nav/navCalendar.vue';

export default {
    components: {
        navAbout,
        navSearch,
        navCalendar
    },
    data: function() {
        return {
            recipes: [],
        }
    },
}
</script>

<style scoped>
    .header-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
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