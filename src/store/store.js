import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.store({
  state: {
    recipes: [],
  },
  getters: {
    recipes() {
      return this.$store.getters.score
    }
  },
  mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes
    }
  },
  actions: {
    fetchRecipes({ commit }) { //this is context.commmit
      const res = await axios.post(`${process.env.PORT}/graphql`, {
          query: `{
            recipes {
              id
              name
              ingredients
              directions
            }
          }`
        })
        commit('setRecipes', res.data.data.recipes)
    }
  }
})