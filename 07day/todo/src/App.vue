<template>
  <div id="app">
      <div class="todo">
          <app-header :addTodo="addTodo"></app-header>
          <app-list :todos="todos" :deleteTodo="deleteTodo"></app-list>
          <app-footer :selectAllTodo="selectAllTodo" :todos="todos" :deleteCheckedTodo="deleteCheckedTodo"></app-footer>
      </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import List from "./components/List.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'app',
  data () {
    return {
        //初始化的数据
        todos : [
            {title : "我今天要学习todolist", complete : false},
            {title : "我今天要学习router路由", complete : true},
            {title : "我今天要学习vuex", complete : false}
        ]
    }
  },
  methods : {
    //添加数据
    addTodo(data){
        this.todos.push(data);
    },
    //删除单个数据
    deleteTodo(index){
        this.todos.splice(index,1);
    },
    //删除选中的数据
    deleteCheckedTodo(){
        this.todos = this.todos.filter((item,index)=>{
            return !item.complete
        });

        console.log(this.todos)
    },
    //全选全不选
    selectAllTodo(check){
        this.todos.forEach((item,index)=>{
            item.complete = check;
        })
    }
  },
  components : {
      "appHeader" : Header,
      "appList" : List,
      "appFooter" : Footer
  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .todo{
        padding: 10px;
        width: 500px;
        border: 1px solid #ccc;
        margin: 30px auto;
        border-radius: 3px;
    }
</style>
