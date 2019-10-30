import Vue from "vue"
import VueRouter from "vue-router"

//引入组件
import Home from "../components/Home"
import List from "../components/List"
import Detail from "../components/Detail"
import About from "../components/About"

//配置路由-也就配置文件的路径
const router = new VueRouter({
    routes : [
        {
            path : "*",
            redirect : "/"
        },
        {
            path : "/",
            name : "home",
            component : Home
        },
        {
            path : "/list",
            name : "list",
            component : List
        },
        {
            path : "/detail",
            name : "detail",
            component : Detail
        },
        {
            path : "/about/:id",
            name : "about",
            component : About
        }
    ]
});

export default router
