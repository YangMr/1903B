<template>
  <div class="register">
    <h1>我是注册页面</h1>
    <form class="form-register">
      <div class="form-group">
        <label for="">用户名:</label>
        <input type="text" v-model="register.user" placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <label for="">密码:</label>
        <input type="password" v-model="register.pass" placeholder="请输入密码">
      </div>
      <div class="form-group">
        <label for="">确认密码:</label>
        <input type="password" v-model="register.realpass" placeholder="请输入确认密码">
      </div>
      <div class="form-group">
        <label for="">邮箱:</label>
        <input type="email" v-model="register.email" placeholder="请输入邮箱">
      </div>
      <div class="form-group">
        <label for="">性别:</label>
        <input type="radio" v-model="register.sex" name="sex" value="男">男
        <input type="radio" v-model="register.sex" name="sex" value="女">女
      </div>
      <button type="button" @click="sendRegister">注册</button>
    </form>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        register : {
          user : "",
          pass : "",
          realpass : "",
          email : "",
          sex : "男"
        }
      }
    },
    created() {
    },
    methods: {
      sendRegister(){

        // axios.get("http://localhost:3001",{
        //   params : this.register
        // }).then(response=>{
        //   console.log(response)
        // }).catch(error=>{
        //   console.log(error)
        // })
        //
        // axios.post("http://localhost:3001",{
        //   name : "jack",
        //   age : "20"
        // }).then()
        //
        // axios({
        //   method : "get",
        //   params : this.register,
        //   url : "http://localhost:3001/user",
        //   timeout : 1000,
        //   responseType: "json"
        // }).then(response=>{
        //   console.log(response)
        // }).catch(error=>{
        //   console.log(error);
        // })
        //
        axios({
          method : "get",
          params : this.register,
          url : "/",
          timeout : 1000,
          responseType: "json"
        }).then(response=>{
          console.log(response)
        }).catch(error=>{
          console.log(error);
        })
        //
        // axios({
        //   method : "get",
        //   params : this.register,
        //   url : "http://localhost:3001/post",
        //   timeout : 1000,
        //   responseType: "json"
        // }).then(response=>{
        //   console.log(response)
        // }).catch(error=>{
        //   console.log(error);
        // })
      }
    }
  }
</script>

<style scoped="scoped">
  .register{
    width: 550px;
    border:1px solid #ccc;
    margin: 60px auto;
    padding: 15px;
  }
  .register h1{
    text-align: center;
    font-size: 18px;
    color: purple;
  }
  .form-register{
    padding-left: 120px;

  }
  .form-group{
    padding: 10px 0;
  }
  .form-group label{
    width: 80px;
    display: inline-block;
    text-align: right;
  }
  button{
    border:1px solid #ddd;
    width: 110px;
    height: 35px;
    background: #ddd;
    margin:10px 50px;
  }
</style>
