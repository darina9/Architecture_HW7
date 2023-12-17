import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route'
// import Flicking from "@egjs/vue-flicking";
// import "@egjs/vue-flicking/dist/flicking.css";


// Vue.use(Flicking);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
