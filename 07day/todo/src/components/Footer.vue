<template>
    <div class="todo-footer">
        <label for="">
            <input type="checkbox" v-model="isCheckAll">
        </label>

        <span>
            <span>已完成{{completeSize}}</span>/<span>全部{{todos.length}}</span>
        </span>

        <button type="button" @click="deleteTask" class="btn">清除已完成的任务</button>
    </div>
</template>

<script>
  export default {
    props : {
        deleteCheckedTodo : Function,
        todos : Array,
        selectAllTodo : Function
    },
    data() {
      return {

      }
    },
    created() {
    },
    computed : {
        completeSize(){
            return this.todos.filter((item,index)=>{
                return item.complete;
            }).length;
        },
        isCheckAll : {
            get(){
                return this.completeSize == this.todos.length
            },
            set(value){
                this.selectAllTodo(value)
            }
        }
    },
    methods: {
        deleteTask(){
            this.deleteCheckedTodo();
        }
        // a(e){
        //
        //     this.selectAllTodo(e.target.checked)
        // }
    }
  }
</script>

<style scoped="scoped">
    .btn{
            width:150px;
            border: 1px solid #f60;
            background: #f60;
            color: #fff;
            height: 25px;
            position: relative;
            top: 5px;
            right: 20px;
            cursor: pointer;
            border-radius: 3px;
            float: right;

    }
</style>
