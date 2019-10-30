import Vue from 'vue'
//引入vue-router
import VueRouter from "vue-router"
import App from './App.vue'
import router from "./router"
//加载
Vue.use(VueRouter)





//将实例化 的路由挂载到vue实例
new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
})
