import Vue from 'vue'
import Router from 'vue-router'

import recipes from '@/components/recipes'
import recipe from '@/components/recipe'
import newRecipe from '@/components/newRecipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: recipes
    },
    {
      path: '/recipe/:id',
      component: recipe,
    },
    {
      path: '/new-recipe',
      component: newRecipe
    }
  ]
})