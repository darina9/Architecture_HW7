import PromoFirst from "./pages/PromoFirst"
import NotFound from "./pages/NotFound"
import PromoSecond from "./pages/PromoSecond"
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "./pages/HomePage"
import CF from "./pages/CF"
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/promo-first/',
            name: 'PromoFirst',
            component: PromoFirst
        },
        {   
            path: '/promo-second/',
            name: 'PromoSecond',
            component: PromoSecond
        },
        {   
            path: '/cf/',
            name: 'CF',
            component: CF
        },
        {
            path: '*',
            component: NotFound
        }
    ]
  })
  
  export default router