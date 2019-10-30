<template>
    <ul class="todo-list">
        <app-item v-for="(item,index) in todos" :index="index" :item="item" :deleteTodo="deleteTodo"></app-item>
    </ul>
</template>

<script>
  import Item from "./ListItem.vue"
  export default {
    props : {
        todos : Array,
        deleteTodo : Function
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    },
    components:{
        "appItem" : Item
    }
  }
</script>

<style scoped="scoped">
    .todo-list{
        border: 1px solid #ccc;
        list-style: none;
        margin: 10px 0;
    }
</style>
