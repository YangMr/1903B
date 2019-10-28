<template>
    <div class="">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in userArray" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.email}}</td>
                    <td>
                        <button @click="deleteItem(index)" type="button" class="btn btn-primary">
                            删除
                        </button>
                        <button @click="change(index)" type="button" class="btn btn-primary">
                            修改
                        </button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="text-right">
                        <button @click="deleteAllItem" type="button" class="btn btn-primary" >
                            删除所有
                        </button>
                    </td>
                </tr>
            </tfoot>
        </table>


        <div class="model" v-show="flag">
            <h3 class="text-center">修改</h3>
            <div class="form-group">
                <label for="">姓名:</label>
                <input type="text" v-model="userArray[count].name"  class="form-control" placeholder="请输入姓名">
            </div>
            <button type="button" @click="yes" class="btn btn-primary">
                确定
            </button>
            <button type="button" @click="flag=false" class="btn btn-primary">
                取消
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    props : {
        userArray : Array,
        item : String
    },
    data() {
      return {
          flag : false,
          count : 0
      }
    },
    created() {
    },
    methods: {
        deleteItem(index){
            this.$emit("sendIndex",index);
        },
        deleteAllItem(){
            this.$emit("delAll",[]);
        },
        change(index){
            this.flag = true;
            this.$emit("findName",index);
            this.count = index;
        },
        yes(){
            this.flag = false

        }
    }
  }
</script>

<style scoped="scoped">
    .model{
        width: 550px;
        height: 220px;
        padding:10px;
        border: 1px solid #ccc;
        position: absolute;
        margin: auto;
        left: 0;
        top:0;
        bottom:0;
        right :0;
        background: #fff;
    }
    .model .form-group{
        display: flex;
    }
    .model .form-group label{
        width: 50px;
        line-height: 40px;
    }
</style>
