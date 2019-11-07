import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index.vue"
import Register from "@/views/Register";
import NotFound from "@/views/404"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path : "/register",
      name : "register",
      component : Register
    },
    {
      path : "*",
      name : "/404",
      component : NotFound
    }
  ],
  mode : "history"
})
