<template>
    <div class="page-wrapper">
        <main class="new-recipe">
            <h3>Add a new recipe!</h3>
            <form class="content" action="" method="post">
               <div class="name-container">
                    <label for="name">
                        Recipe Name
                    </label>
                    <input name="name" id="name" type="text" ref="recipeName">
               </div>
               <div class="ing-container">
                    <label for="ingredient">
                        Ingredient {{this.ingredients.length + 1 || 1}}
                    </label>
                    <input name="ingredient" id="ingredient" type="text" ref="ingredient">
                    <h5 class="add-item" @click="addItem('ingredient')">Add Ingredient</h5>
                    <h5 @click="removeItem('ingredient')">Undo</h5>
               </div>
               <div class="dir-container">
                    <label for="direction">
                        Direction {{this.directions.length + 1 || 1}}
                    </label>
                    <textarea name="direction" id="direction" type="text" ref="direction"></textarea>
                    <h5 class="add-item" @click="addItem('direction')">Add Direction</h5>
                    <h5 @click="removeItem('direction')">Undo</h5>
               </div>
               <div class="preview">
                   <h4 v-if="this.ingredients.length">Current Ingredients</h4>
                        <ul>
                            <li v-for="item in this.ingredients" v-bind:key="item.index">{{item}}</li>
                        </ul>
                   <h4 v-if="this.directions.length">Current Directions</h4>
                        <ul>
                            <li v-for="item in this.directions" v-bind:key="item.index">{{item}}</li>
                        </ul>
               </div>
               <button type="submit" class="submit" @click.prevent="handleSubmit">Add Recipe</button>
            </form>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data() {
        return {
            id: '',
            name: '',
            ingredients: [],
            directions: []
        }
    },

    methods: {
        handleSubmit() {
            const name = this.$refs.recipeName.value;
            const angryEmoji = String.fromCodePoint(0x1F621);
            if (name === '') {
                alert('No Blank Names! ' + angryEmoji);
                return;
            }
            const idify = name.replace(/\W/gi, '').toLowerCase();
            try {
                const res = await axios.post(`http://localhost:4000/graphql`, {
                mutation: `
                mutation createRecipe($id: String!, $name: String!, $ingredients: [String!], $directions: [String!]) {
                    createRecipe(id: $id, name: $name, ingredients: $ingredients, directions: $directions) {
                    name
                    }
                }`,
                variables: {
                    id: this.$refs.singleRecipe.value,
                    name: this.$refs.recipeName,
                    ingredients: this.ingredients,
                    directions: this.directions
                }
                })
                this.recipe = res.data.data.recipe
            } catch(e) {
                this.recipe = 'An error occured'
            }
        },
        addItem(type) {
            if (type === "direction") {
                if (this.$refs.direction.value === '') return
                this.directions.push(this.$refs.direction.value);
                this.$refs.direction.value = '';
            } else {
                if (this.$refs.ingredient.value === '') return
                this.ingredients.push(this.$refs.ingredient.value);
                this.$refs.ingredient.value = '';
            }
        },
        removeItem(type) {
            if (type === 'direction') {
                if (this.directions.length === 0) return;
                this.directions.pop();
            } else {
                if (this.ingredients.length === 0) return;
                this.ingredients.pop();
            }
        }
    }
}
</script>

<style scoped>
    input {
        margin-bottom: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        width: 60vw;
        height: 2rem;
        font-size: 1rem;
    }
    textarea {
        margin-bottom: 10px;
        border: 1px solid gray;
        border-radius: 5px;
        width: 60vw;
        height: 4rem;
        font-size: 1rem;
    }
    .page-wrapper {
        /* background: url(../assets/bg.png);
        background-attachment: fixed; */
        height: 85vh;
        margin-top: 15vh;
    }
    .new-recipe {
        display: grid;
        justify-content: center;
        justify-items: center;
        width: 80vw;
        margin: 30px auto;
        border: 2px solid black;
        border-radius: 10px;
        background: white;
    }
    .ing-container, .dir-container, .name-container {
        display: grid;
        justify-content: center;
        text-align: center;
        padding-top: 15px;
    }
    .ing-container h5 {
        margin: 0 auto 10px auto;
        display: inline-block;
    }
    .dir-container h5 {
        margin: 0 auto 10px auto;
        display: inline-block;
    }
    .add-item {
        margin: 0.5rem auto;
    }
    .submit {
        display: block;
        margin: 1rem auto;
        font-size: 1.3rem;
        border: 3px solid grey;
        border-radius: 5px;
        background: white;
    }
    .preview {
        color: lightgrey;
        text-align: center;
    }
    .preview h4 {
        margin-bottom: 0;
    }
    .preview ul {
        margin: 0;
        padding: 0;
    }
</style>