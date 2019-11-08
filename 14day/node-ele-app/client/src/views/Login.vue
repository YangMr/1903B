<template>
  <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">积云1903B在线后台管理系统</span>
            </div>
            <el-form :model="loginUser" :rules="rules" ref="loginForm" class="loginForm" label-width="60px">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登  录</el-button>
                </el-form-item>
                <div class="tiparea">
                    <p>还没有账号？现在<router-link to='/register'>注册</router-link></p>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
  import jwt_decode from "jwt-decode";
  export default {
    data() {
      return {
        loginUser : {
          email : "",
          password : ""
        },
        rules : {
          email : [
            {
              required : true,
              message : "邮箱不能为空!",
              trigger : "blur"
            },
            {
              type : "email",
              message : "邮箱格式不正确!",
              trigger : "blur"
            }
          ],
          password : [
            {
              required : true,
              message : "密码不能为空!",
              trigger : "blur"
            },
            {
              min : 6,
              max : 30,
              message : "长度6到30个字符",
              trigger : "blur"
            }
          ]
        }
      }
    },
    created() {
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("/api/users/login",this.loginUser).then(response=>{
              console.log(response);

              //获取token
              const token = response.data.token;

              //将token存储到本地
              localStorage.setItem("eleToken",token);

              //解析token
              const decode = jwt_decode(token);

              console.log(decode)

              //跳转到首页
              this.$router.push({name : "index"});

            }).catch(error=>{
              console.log(error);
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
.login {
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
  top: 20%;
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
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
