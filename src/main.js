import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/recipes/:id' },
  { path: '/newRecipe' },
  { path: '*'}
]

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  routes
}).$mount('#app')
