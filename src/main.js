import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
  // { path: '/recipe/:id', component: recipe },
  { path: '/' },
  { path: '/new-recipe' },
  { path: '*'}
]

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  routes
}).$mount('#app')
