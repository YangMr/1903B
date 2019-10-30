<template>
    <li :style="{background:bgColor}" @mouseover="handleEvent(true)" @mouseout="handleEvent(false)">
        <label for="">
            <input type="checkbox" v-model="item.complete">
            <span>{{item.title}}</span>
        </label>
        <button type="button" v-show="isShow" class="btn" @click="deleteItem(index)">删除</button>
    </li>
</template>

<script>
  export default {
    props : {
        item : Object,
        deleteTodo : Function,
        index : Number
    },
    data() {
      return {
          isShow : false,
          bgColor : "#fff"
      }
    },
    created() {
    },
    methods: {
        handleEvent(flag){
            if(flag){
                this.isShow = true;
                this.bgColor = "#aaa";
            }else{
                this.isShow = false;
                this.bgColor = "#fff";
            }
        },
        deleteItem(index){
            if(window.confirm(`确认要删除${this.item.title}`)){
                this.deleteTodo(index);
            }
        }
    }
  }
</script>

<style scoped="scoped">
    li{
        height: 35px;
        border-bottom: 1px solid #ccc;
        line-height: 35px;
        padding-left: 10px;
        display: flex;
        justify-content: space-between;
    }
    li:last-child{
        border-bottom:none;
    }
    .btn{
        width: 60px;
        border: 1px solid #f60;
        background: #f60;
        color: #fff;
        height: 25px;
        position: relative;
        top: 5px;
        right: 20px;
        cursor: pointer;
        border-radius: 3px;
    }
</style>
