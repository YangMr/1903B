<template>
    <div class="form">
        <h3 class="text-center">添加用户</h3>
        <form class="form-horizontal">
			<div class="form-group">
                <label for="">姓名:</label>
                <input type="text" class="form-control" v-model="users.name" placeholder="请输入姓名">
            </div>
            <div class="form-group">
                <label for="">年龄:</label>
                <input type="text" class="form-control" v-model="users.age" placeholder="请输入年龄">
            </div>
            <div class="form-group">
                <label for="">邮箱:</label>
                <input type="text" class="form-control" v-model="users.email"  placeholder="请输入邮箱">
            </div>
            <div class="text-center">
                <button @click="addItem" type="button" class="btn btn-primary" name="button">
                    添加
                </button>
                <button type="reset" class="btn btn-primary" name="button">
                    重置
                </button>
            </div>
		</form>
        <hr>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          users : {
              name : "",
              age : "",
              email : ""
          }
      }
    },
    created() {
    },
    methods: {
        addItem(){
            //把子组件的输入的姓名，年龄以及邮箱发送给父组件
            this.$emit("sendUsers",this.users);
            //清空文本框的内容
            this.users = {
                name : "",
                age : "",
                email : ""
            }
        }
    }
  }
</script>

<style>
</style>
