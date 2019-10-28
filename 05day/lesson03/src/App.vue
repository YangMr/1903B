<template>
  <div id="app">
      <app-header></app-header>
      <app-main :arrList="arrList"></app-main>
      <app-footer @new="getArrList"  @changeAllFlag="changeFlag" @delAll="delAll" :len="arrList.length" :arr="arrList"></app-footer>
  </div>
</template>

<script>
//引入header组件
import Header from "./components/Header.vue"
//引入main组件
import Main from "./components/Main.vue"
//引入footer组件
import Footer from "./components/Footer.vue"

export default {
    name: 'app',
    data () {
        return {
            arrList : [
                {id : 1, task : "我今天的任务是掌握父子组件之间的通信1",flag:false},
                {id : 2, task : "我今天的任务是掌握父子组件之间的通信2",flag:false},
                {id : 3, task : "我今天的任务是掌握父子组件之间的通信3",flag:false}
            ]
        }
    },
    components : {
        "appHeader" : Header,
        "appMain" : Main,
        "appFooter" : Footer
    },
    methods : {
        delAll(data){
            this.arrList = data
        },
        changeFlag(data){
            this.arrList.forEach((item,index)=>{
                item.flag = data
            });
        },
        getArrList(data){
            this.arrList = data
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background: #ddd;
    }
    #app{
        width: 600px;
        margin: 30px auto;
        border:1px solid #fff;
        border-radius: 3px;
        padding: 10px;
    }
</style>
