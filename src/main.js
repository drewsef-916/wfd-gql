import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
import recipe from './components/recipe'
import newRecipe from './components/newRecipe'

Vue.use(VueRouter)
=======
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
>>>>>>> dd750d271c2dc0d32fddbc90bf5c3e3e4f33116a

Vue.config.productionTip = false

const routes = [
<<<<<<< HEAD
  { path: '/recipe/:id', component: recipe },
  { path: '/new-recipe', component: newRecipe },
=======
  // { path: '/recipe/:id', component: recipe },
  { path: '/' },
  { path: '/new-recipe' },
>>>>>>> dd750d271c2dc0d32fddbc90bf5c3e3e4f33116a
  { path: '*'}
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#app')
