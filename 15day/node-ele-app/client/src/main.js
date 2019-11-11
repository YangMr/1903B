// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入reset.css文件
import "./assets/css/reset.css";

//引入element-ui的js文件
import ElementUI from 'element-ui'
//引入element-ui的样式文件
import 'element-ui/lib/theme-chalk/index.css'
//将element-ui进行注册
Vue.use(ElementUI)

//引入vuex
import store from "./store/store.js"

//引入http.js文件
import axios from "./http.js";

//将axios挂载到vue的原型上
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
