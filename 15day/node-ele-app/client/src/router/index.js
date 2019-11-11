import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/views/Index.vue"
import Register from "@/views/Register";
import NotFound from "@/views/404"
import Login from "@/views/Login"
import Home from "@/views/Home"
import InfoShow from "@/views/InfoShow"
import FoundList from "@/views/FoundList"
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect : "/index"
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children : [
        {
          path : "/",
          redirect : "/index/home"
        },
        {
          path : "/index/home",
          name : "home",
          component : Home
        },
        {
          path : "/index/infoshow",
          name : "infoshow",
          component : InfoShow
        },
        {
          path : "/index/foundlist",
          name : "foundlist",
          component : FoundList
        }
      ]
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
    },
    {
      path : "/login",
      name : "login",
      component : Login
    }
  ],
  mode : "history"
})

//使用路由守卫进行鉴权 -- 这个方法是在路由跳转之前进行触发
router.beforeEach((to,from,next)=>{
  //判断路由跳转本地有没有token
  const isLogin = localStorage.eleToken ? true : false;

  //如果是登录和注册页面则不用验证token
  if(to.path == "/login" || to.path == "/register"){
    next();
  }else{
    //如果登录过的话则跳转到要进入的页面，没有登录过则跳转到登录页面
    isLogin ? next() : next("/login");
  }

  next()
})

export default router;
