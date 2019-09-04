import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import recipe from './components/recipe'
import newRecipe from './components/newRecipe'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/recipe/:id', component: recipe },
  { path: '/new-recipe', component: newRecipe },
  { path: '*'}
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
