<template>
    <div class="todo-header">
        <input @keyup.enter="getTitle" type="text" v-model="title" placeholder="请输入要添加的任务，按回车键进行添加">
    </div>
</template>

<script>
  export default {
    props : {
        addTodo : Function
    },
    data() {
      return {
          title : ""
      }
    },
    created() {
    },
    methods: {
        getTitle(){
            //去除空格
            const title = this.title.trim();

            //判断输入的内容是否为空
            if(!title){
                alert("请输入内容");
                return;
            }

            //数据
            const obj = {
                title : title,
                complete : false
            }

            this.addTodo(obj);

            this.title = "";
        }
    }
  }
</script>

<style scoped="scoped">
    .todo-header input{
        border:1px solid #ccc;
        border-radius: 3px;
        height: 35px;
        line-height: 35px;
        text-indent: 2em;
        color: #999;
        width: 100%;
    }
</style>
