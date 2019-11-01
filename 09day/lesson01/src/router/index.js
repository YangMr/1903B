import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Child from "@/components/Child"
import Dist from "@/components/Dist"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld,
      children : [
        {
          path : "/h/child",
          component : Child
        },
        {
          path : "/h/dist",
          name : "dist",
          component : Dist
        }
      ],
    }
  ],
  mode : "history"
})
