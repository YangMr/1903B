//引入vue
import Vue from 'vue'
//引入App组件
import App from './App.vue'





//实例化vue
new Vue({
  el: '#app',  
  render: h => h(App)   //渲染
})
