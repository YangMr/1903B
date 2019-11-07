<template>
  <div class="register">
    <section class="form_container">
      <!-- 注册页面的标题 -->
      <div class="manage_tip">
        <span class="title">积云1903B在线后台管理系统</span>
      </div>
      <!-- 注册页面的表单 -->
      <el-form :model="registerUser"  :rules="rules" ref="registerForm" label-width="80px" class="registerForm">

        <!-- 用户名输入框 -->
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <!-- 邮箱输入框 -->
        <el-form-item label="邮箱" prop="email">
          <el-input type="email" v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>

        <!-- 密码输入框 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
        </el-form-item>

        <!-- 确认密码输入框 -->
        <el-form-item label="确认密码" prop="password2">
          <el-input type="password" v-model="registerUser.password2" placeholder="请确认密码"></el-input>
        </el-form-item>

        <!-- 确认身份 -->
        <el-form-item label="确认身份" prop="identity">
          <el-select v-model="registerUser.identity" placeholder="请选择身份">
           <el-option value="管理员"></el-option>
           <el-option value="员工"></el-option>
         </el-select>
        </el-form-item>

        <!-- 注册按钮 -->
        <el-form-item>
          <el-button class="submit_btn" type="primary" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>

      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        registerUser : {
          name : "",
          email : "",
          password : "",
          password2 : "",
          identity : ""
        }
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
</style>
