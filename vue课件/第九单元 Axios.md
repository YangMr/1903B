# 第九章 Axios

[toc]



## 一、本章介绍

## 二、工程配置

## 三、Axios配置

## 四、发送POST请求

## 五、发送GET请求

## 六、访问和使用响应数据

## 七、全局请求配置

## 八、使用拦截器

## 九、自定义Axios实例

## 十、Element UI的使用

## 十一、项目实战-资金管理系统

### 11.1 前端页面的准备工作

  1. 使用vue-cli创建项目

     vue init webpack client

		2. 进入client目录

     cd client

		3. 安装项目所需要的依赖

     cnpm install

		4. 启动项目

     npm start

		5. 删除logo以及引入logo的标签
	
		6. 删除Helloword.vue组件以及引入的路由
	
		7. 在src目录下创建views文件夹
	
		8. 在views文件夹内创建Index.vue组件
	
		9. 在路由文件内配置Index.vue的路由
	
		10. 在App.vue组件删除默认的css样式
	
		11. 在App.vue组件设置html, body,#app的宽度高度为百分之百
	
		12. 在assets文件夹内创建css文件夹
	
		13. 在css文件夹内创建reset.css文件
	
		14. 在index.html文件内引入reset.css
	
		15. 在reset.css文件内设置默认样式

      ```css
      /* http://meyerweb.com/eric/tools/css/reset/
         v2.0 | 20110126
         License: none (public domain)
      */
      
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
      	margin: 0;
      	padding: 0;
      	border: 0;
      	font-size: 100%;
      	font: inherit;
      	vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
      	display: block;
      }
      body {
      	line-height: 1;
      }
      ol, ul {
      	list-style: none;
      }
      blockquote, q {
      	quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
      	content: '';
      	content: none;
      }
      table {
      	border-collapse: collapse;
      	border-spacing: 0;
      }
      
      .el-loading{
        position: absolute;
        z-index: 2000;
        background-color: rgba(255,255,255,.7);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
      }
      .el-loading-spinner{
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
      }
      
      ```

      

### 11.2 设置Register和404组件

  1. 导入素材

  2. 在views文件夹内分别创建Register.vue组件和404组件

  3. 在路由文件分别配置Register.vue组件和404组件的路由

  4. 在404组件内设置内容

     ```vue
     <template>
       <div class="notfound">
         <img src="../assets/img/404.gif" alt="">
       </div>
     </template>
     
     <script>
       export default {
         data() {
           return {
           }
         },
         created() {
         },
         methods: {
         }
       }
     </script>
     
     <style scoped>
       .notfound{
         width: 100%;
         height: 100%;
         overflow: hidden;
       }
       .notfound img{
         width: 100%;
         height: 100%;
       }
     </style>
     
     ```

		5. 在Register.vue组件设置背景图和标题

     ```vue
     <template>
       <div class="register">
         <section class="form_container">
           <div class="manage_tip">
             <span class="title">积云1903B在线后台管理系统</span>
           </div>
         </section>
       </div>
     </template>
     
     <script>
       export default {
         data() {
           return {
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
     </style>
     
     ```

		6. 打开浏览器测试一下两个组件能否正常显示

### 11.3 搭建element注册表单

```vue
 <el-form :model="registerUser" :rules="rules" class="registerForm" ref="registerForm" label-width="80px">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="registerUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="registerUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="registerUser.password2" placeholder="请确认密码" type="password"></el-input>
                </el-form-item>
                <el-form-item label="选择身份">
                    <el-select v-model="registerUser.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="员工" value="employee"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  class="submit_btn" @click="submitForm('registerForm')">注 册</el-button>
                </el-form-item>
            </el-form>
```



### 11.4 验证表单和按钮

```vue
<script>
export default {
  name: "register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerUser: {
        name: "",
        email: "",
        password: "",
        password2: "",
        identity: ""
      },
      rules: {
        name: [
          { required: true, message: "用户名不能为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "邮箱格式不正确",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit success");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
```



### 11.5 加载动画和消息提醒

  1. 安装axios

     cnpm install axios --save

  2. 在src目录下创建http.js文件

  3. 在该文件内导入axios

     import axios from "axiox"

		4. 导出axios

     export default  axios

		5. 在main.js文件内引入http.js

     import axios from "http.js"

		6. 把axios挂载到vue原型上

     Vue.prototype.$axios = axios;

		7. 引入element-ui的loading组件

     import {Loading} from "element-ui"

		8. 定义开始加载动画方法和结束加载动画方法

     ```javascript
     let loading        //定义loading变量
     
     function startLoading() {    //使用Element loading-start 方法
         loading = Loading.service({
             lock: true,
             text: '加载中...',
             background: 'rgba(0, 0, 0, 0.7)'
         })
     }
     function endLoading() {    //使用Element loading-close 方法
         loading.close()
     }
     ```

		9. 在http.js文件内定义请求拦截与响应拦截，在进行请求拦截中调用开始加载动画方法,在响应拦截中调用结束加载动画方法

     ```javascript
     // 请求拦截  
     axios.interceptors.request.use(config => {
         // 加载
         startLoading()
         return config;
     }, error => {
         return Promise.reject(error)
     })
     
     // 响应拦截 
     axios.interceptors.response.use(response => {
         endLoading()
         return response;
     }, error => {
         // 错误提醒
         endLoading()
         return Promise.reject(error)
     })
     ```

		10. 在http.js文件内引入Message消息提示组件

      ```javascript
      import { Message, Loading } from 'element-ui';
      ```

		11. 当响应发生错误的时候显示消息提示

      ```javascript
      // 响应拦截 
      axios.interceptors.response.use(response => {
          endLoading()
          return response
      }, error => {
          // 错误提醒
          endLoading()
          Message.error(error.response.data)
          return Promise.reject(error)
      })
      ```

		12. 设置vue跨域请求

      ```javascript
      '/api': {
                      target: 'http://localhost:3000/api/',
                      ws: true,
                      changOrigin: true,
                      pathRewrite: {
                          '^/api': ''
                      }
                  }
      ```

		13. 使用axios进行注册

      ```javascript
      this.$axios
                  .post("/api/users/register", this.registerUser)
                  .then(res => {
                    // 注册成功
                    this.$message({
                      message: "注册成功！",
                      type: "success"
                    });
                    // this.$router.push("/login");
                  });
              } else {
                console.log("error submit!!");
                return false;
              }
      ```

### token存储:

​		

```javascript
submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios.post("/api/users/login", this.loginUser).then(res => {
            // 登录成功
            const { token } = res.data;
            localStorage.setItem("eleToken", token);

            // 页面跳转
            this.$router.push("/index");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
```



### 11.6 路由守卫和token过期处理

  1. 通过路由守卫进行鉴权，判断能否进入鉴权页面

     ```javascript
     // 添加路由守卫
     router.beforeEach((to, from, next) => {
       const isLogin = localStorage.eleToken ? true : false;
       if (to.path == "/login" || to.path == "/register") {
         next();
       } else {
         isLogin ? next() : next("/login");
       }
     })
     ```

		2. token过期处理

     ```javascript
     //引入router
     import router from './router'
     
     // 请求拦截  设置统一header
     axios.interceptors.request.use(config => {
         // 加载
         startLoading()
     	//判断是否能够获取到本地的token，如果能够获取到，则通过头信息发送过去
         if (localStorage.eleToken)
             config.headers.Authorization = localStorage.eleToken
         return config
     }, error => {
         return Promise.reject(error)
     })
     
     // 响应拦截  401 token过期处理
     axios.interceptors.response.use(response => {
         endLoading()
         return response
     }, error => {
         // 错误提醒
         endLoading()
         Message.error(error.response.data)
     	//如果状态吗为401，表示发送的请求需要有通过 HTTP 认证的认证信息，也就是token过期了
         const { status } = error.response
         if (status == 401) {
             Message.error('token值无效，请重新登录')
             // 清除token
             localStorage.removeItem('eleToken')
             // 页面跳转
             router.push('/login')
         }
         return Promise.reject(error)
     })
     ```

     

### 11.7 解析token并存储到vuex中

  1. 安装解析token的模块

     ```javascript
     cnpm install jwt-decode --save
     ```

		2. 在登录页面引入jwt-decode模块	

     ```javascript
     import jwt_decode from "jwt-decode";
     ```

		3. 解析token获取到信息

     ```javascript
     // 解析token
     const decode = jwt_decode(token);
     ```

		4. 安装vuex

     ```
     cnpm install axios --save
     ```

		5. 引入并进行配置

     ```javascript
     import Vue from 'vue'
     import Vuex from 'vuex'
     
     Vue.use(Vuex)
     
     const types = {
      
     }
     
     const state = { // 需要维护的状态
       
     }
     
     const getters = {
       
     }
     
     const mutations = {
       
     }
     
     const actions = {
       
     }
     
     export default new Vuex.Store({
       state,
       getters,
       mutations,
       actions
     })
     
     ```

     

		6. 在vuex中编写token的存储方式

     ```javascript
     import Vue from 'vue'
     import Vuex from 'vuex'
     
     Vue.use(Vuex)
     
     const types = {
       SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
       SET_USER: 'SET_USER' // 用户信息
     }
     
     const state = { // 需要维护的状态
       isAutnenticated: false,  // 是否认证
       user: {}   // 存储用户信息
     }
     
     const getters = {
       isAutnenticated: state => state.isAutnenticated,
       user: state => state.user
     }
     
     const mutations = {
       [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
         if (isAutnenticated)
           state.isAutnenticated = isAutnenticated
         else
           state.isAutnenticated = false
       },
       [types.SET_USER](state, user) {
         if (user)
           state.user = user
         else
           state.user = {}
       }
     }
     
     const actions = {
       setIsAutnenticated: ({ commit }, isAutnenticated) => {
         commit(types.SET_IS_AUTNENTIATED, isAutnenticated)
       },
       setUser: ({ commit }, user) => {
         commit(types.SET_USER, user)
       },
       clearCurrentState: ({ commit }) => {
         commit(types.SET_IS_AUTNENTIATED, false)
         commit(types.SET_USER, null)
       }
     }
     
     export default new Vuex.Store({
       state,
       getters,
       mutations,
       actions
     })
     
     ```

		7. 将token存储到vuex中

     ```javascript
      // 存储数据
        this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
                 this.$store.dispatch("setUser", decode);
     ```

		8. 当重新在浏览器打开项目时，判断本地有没有token，在app.js文件内设置：

     ```javascript
     import jwt_decode from "jwt-decode";
     export default {
       name: "app",
       created() {
         if (localStorage.eleToken) {
           const decode = jwt_decode(localStorage.eleToken);
           this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
           this.$store.dispatch("setUser", decode);
         }
       },
       methods: {
         isEmpty(value) {
           return (
             value === undefined ||
             value === null ||
             (typeof value === "object" && Object.keys(value).length === 0) ||
             (typeof value === "string" && value.trim().length === 0)
           );
         }
       }
     };
     ```

     

### 11.8 设计顶部导航

### 11.9 设置下拉菜单

### 11.10 设置首页和个人信息

### 11.11 设置左侧导航栏

### 11.12 展示资金管理页面

### 11.13 细节内容调整

### 11.14 添加按钮

### 11.15 完成添加功能

### 11.16 编辑和删除

### 11.17 实现分页结构

### 11.18 实现分页功能

### 11.19 实现筛选功能

### 11.20 express搭建服务器

  1. 在桌面创建一个项目文件夹，名称为project

  2. 进入桌面创建的项目目录

      cd project

  3. 使用express脚手架创建项目，项目名称为node-app

     express node-app

		4. 进入node-app项目目录

     cd node-app

		5. 安装项目所需要的依赖

     cnpm install

		6. 测试项目是否能够启动

     npm start

     

### 11.21 连接MongoDB数据库

  1. 什么是mlab？

     mLab是一款免费的在线mongodb数据库，它为用户免费提供了500M容量，这个数据库只能选择默认的，当然想要使用其他的就肯定要收费。

		2. 官网：

     https://mlab.com/

     ![img](https://img-blog.csdnimg.cn/20181230162537611.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Fpbmd5dWxvdmU=,size_16,color_FFFFFF,t_70)

		3. 注册

     ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181230162638924.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Fpbmd5dWxvdmU=,size_16,color_FFFFFF,t_70)

     创建完成并通过验证后，我们就可以使用了，完成后的页面如下：

     ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181230162946230.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Fpbmd5dWxvdmU=,size_16,color_FFFFFF,t_70)

		4. 登录

     接下来我们创建一个数据库：

     ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181230163200190.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Fpbmd5dWxvdmU=,size_16,color_FFFFFF,t_70)

     记得选择免费版啊，虽然只有500m，但对于我们学习使用已经足够了。

     配置完成后：

     ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181230163642538.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3Fpbmd5dWxvdmU=,size_16,color_FFFFFF,t_70)

		5. 创建用户

  6. 下载mongoose模块，通过该模块连接数据库

     cnpm install mongoose --save

  7. 在app.js文件内引入mongoose模块

     ```javascript
     const mongoose = require("mongoose");
     ```

  8. 在node-app文件夹内创建一个config文件夹，在该文件夹内创建一个js文件，名称为keys.js，该文件的主要作用用来写连接数据库的配置，内容为：

     ```javascript
     module.exports = {
     	mongoURI : "mongodb://127.0.0.1:27017/app"
     }
     ```

  9. 在app.js文件内引入刚才连接数据库的配置文件

     ```javascript
     const db = require("./config/keys.js").mongoURI;
     ```

  10. 使用mongoose模块连接数据库

     ```javascript
     mongoose.connect(db).then(()=>{
     	console.log("数据库连接成功")
     }).catch(error=>{
     	console.log("数据库连接失败:" + error)
     })
     ```

### 11.23 搭建路由和数据模型

  1. 在routes文件夹内创建一个文件夹，名称为api

  2. 在api文件夹内创建一个js文件，名称为users.js，该文件件内主要写我们登录与注册的接口

  3. 在user.js文件内配置二级路由

     ```javascript
     //引入express
     const express = require("express");
     //获取router
     const router = express.Router();
     //配置测试接口
     router.get("/test",(req,res,next)=>{
     	res.json({msg : "login work"})
     })
     
     //导出二级路由
     module.exports = router;
     ```

		4. 在app.js内通过一级路由加载二级路由

     ```javascript
     //引入users.js
     const users = require("./routes/users.js");
     //注册二级二路
     app.use("/api/users",users);
     ```

  5. 在node-app目录下创建model文件夹

  6. 在model文件夹内创建User.js,在该文件内定义schema和模型

     ```javascript
     //引入mongoose
     const mongoose = require("mongoose");
     //获取schema
     const Schema = mongoose.Schema;
     //实例化schema，并定义字段
     const UserSchema = new Schema({
       name : {
         type : String,
         required : true
       },
       email : {
         type : String,
         required : true
       },
       password: {
         type : String,
         required : true
       },
       avatar: {
         type : String
       },
       date : {
         type : Date,
         default : Date.now()
       }
     });
     //创建模型
     const User = mongoose.model("users",UserSchema);
     //导出模型
     module.exports = User;
     ```

### 11.24 搭建注册接口并存储数据

  1. postman的下载使用

  2. 注册并登录postman

  3. 测试接口

  4. 搭建注册接口

     ```javascript
     //引入bcrypt模块
     const bcrypt =require("bcrypt");
     //注册接口
     router.post("/register",(req,res)=>{
       //查询数据库中是否有要注册邮箱，如果没有，就可以进行注册，如何有,给前台返回提示数据
       User.findOne({email : req.body.email}).then((user)=>{
         if(user){
           return res.status(400).json({email : "邮箱被注册"});
         }else{
           const newUser = new User({
             name : req.body.name,
             email : req.body.email,
             password : req.body.password
           });
     
           //这里的salt值，每次都是不一样的，也是根据取到不同的salt，所以每次的加密结果都不一样
           bcrypt.genSalt(10, function (err, salt) {
             bcrypt.hash(newUser.password, salt,(err, hash)=> {
               if(err) throw err;
               newUser.password = hash;
     
               newUser.save().then(user=>{
                 res.json(user)
               }).catch(error=>{
                 console.log(error)
               })
             });
           });
         }
       })
     })
     ```

     5.密码加密

     //安装bcrypt

     cnpm install bcrypt --save

     //引入bcrypt

     const bcrypt = require("bcrypt");

     //使用bcrypt
         

     ```javascript
     bcrypt.genSalt(10, function (err, salt) {
             bcrypt.hash(newUser.password, salt,(err, hash)=> {
               if(error) throw error;
               newUser.password = hash;
             });
           });
     ```

     

  5. 安装body-parser模块,用来接收post方式传递的数据

     ```javascript
     //安装body-parser
     cnpm install body-parser --save
     
     //配置
     app.use(bodyParser.urlencoded({extended:false}));
     app.use(bodyParser.json());
     ```

		6. 测试注册接口

### 11.25 使用全球公认头像gravatar

  1. 安装gravatar

     ```javascript
     cnpm install gravatar --save
     ```

  2. 引入gravatar

     ```javascript
     const gravatar = require("gravatar");
     ```

		3. 使用gravatar

     ​	看文档：https://www.npmjs.com/package/gravatar

     ​	

     ```javascript
     //引入gravatar
     const gravatar = require("gravatar");
     var avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
     
     const newUser = new User({
        name : req.body.name,
        email : req.body.email,
        avatar,
        password : req.body.password
     });
     ```

		4. 测试接口，看看是否能够获取到大头贴

### 11.26 搭建登录接口

```javascript
//登录接口
router.post("/login",(req,res)=>{
  //获取登录的密码
  const password  = req.body.password;
  //获取登录的邮箱
  const email = req.body.email;
  //查询数据库
  User.findOne({email}).then(user=>{
    //如果查找不到邮箱，则给前台返回用户不存在
    if(!user){
      return res.status(404).json({msg : "用户不存在"})
    }
    //对密码进行匹配
    bcrypt.compare(password, user.password).then(isMatch=>{
      if(isMatch){
        res.json({msg : "success",code : 0, text : "登录成功"});
      }else{
        return res.status(400).json({msg : "密码错误"});
      }
    })
  }).catch(error=>{
    console.log(error)
  })
})
```



### 11.27 使用jwt实现token

  1. 安装jsonwebtoken

     ```
     cnpm install jsonwebtoken
     ```

		2. 引入jsonwebtoken

     ```javascript
     const jwt = require("jsonwebtoken");
     ```

		3. 使用jsonwebtoken

     ```
     jwt.sign("规则","加密的名字","过期时间","箭头函数")
     ```

		4. 设置规则

     ```javascript
     const rule = {id:user.id,name:user.name};
     ```

		5. 在keys.js文件内设置加密的名字

     ```javascript
     module.exports = {
       mongoURI : "mongodb://127.0.0.1:27017/app",
       secretOrKey : "secret"
     };
     ```

		6. 引入keys.js文件，获取设置的加密名字

     ```javascript
     //获取加密的名字
     const keys = require("../../config/keys.js");
     //使用jsonwebtoken
     jwt.sign(rule,keys.secretOrKey,"过期时间","回调函数")
     ```

		7. 设置过期时间

     ```javascript
     jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},"回调函数")
     ```

		8. 在回调函数里面获取token

     ```javascript
     jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(error,token)=>{
                 res.json({
                   success : true,
                   token : "yangmr" + token
                 })
             })
     ```

		9. 最终代码

     ```javascript
     //登录接口
     router.post("/login",(req,res)=>{
       //获取登录的密码
       const password  = req.body.password;
       //获取登录的邮箱
       const email = req.body.email;
     
       //查询数据库
       User.findOne({email}).then(user=>{
         //如果查找不到邮箱，则给前台返回用户不存在
         if(!user){
           return res.status(404).json({msg : "用户不存在"})
         }
         //对密码进行匹配
         bcrypt.compare(password, user.password).then(isMatch=>{
           if(isMatch){
     
             //设置加密规则
             const rule = {id:user.id,name:user.name};
     
             //使用jsonwebtoken
             jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(error,token)=>{
                 res.json({
                   success : true,
                   token : "yangmr" + token,
                   code : 0,
                   msg : "登录成功"
                 })
             })
           }else{
             return res.status(400).json({msg : "密码错误"});
           }
         })
       }).catch(error=>{
         console.log(error)
       })
     })
     ```

     

### 11.28 使用passport-jwt验证token

  1. 创建验证token接口

     ```javascript
     router.get("/current","验证token",(req,res)=>{
     
     })
     ```

     

  2. 安装passport-jwt和passport

     ```
     cnpm install passport-jwt passport --save
     ```

  3. 在app.js引入passport

     ```javascript
     //引入passport
     const passport = require("passport");
     ```

  4. 对passport进入初始化

     ```javascript
     //初始化passport
     app.use(passport.initialize());
     ```

		5. 在config文件夹内创建一个js文件，名称passport.js,对passport进行配置
	
		6. 引入创建的passport.js
	
		7. ```javascript
     //引入passport
     const passport = require("passport");
     
     //初始化passport
     app.use(passport.initialize());
     
     //引入创建的passport.js
     require("./config/passport.js")(passport);
     ```

		8. 在passport.js文件内进行配置

     ​```javascript
     //引入passport-jwt
     const JwtStrategy = require('passport-jwt').Strategy;
     const ExtractJwt = require('passport-jwt').ExtractJwt;
     
     //引入mongoose
     const mongoose = require("mongoose");
     
     //创建模型
     const User = require("../model/User.js")
     
     //引入keys.js
     const keys = require("./keys.js");
     
     const opts = {};
     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
     opts.secretOrKey = keys.secretOrKey;
     
     
     
     //导出函数
     module.exports = (passport)=>{
       passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
         //查询数据
         User.findById(jwt_payload.id).then(user=>{
           //判断用户存在不存在
           if(user){
             return done(null,user);
           }
           return done(null,false);
         }).catch(error=>{
           console.log(error);
         })
       })
     );
     }
     ```

		9. 在users.js路由文件中再次引入passport.js

     ```javascript
     const passport = require("passport");
     ```

		10. 在current接口验证token

      ```javascript
      //验证token接口
      router.get("/current",passport.authenticate("jwt",{session : false}),(req,res)=>{
        res.json({msg : "success"})
      })
      ```

		11. 在登录接口修改token

      ```javascript
      //使用jsonwebtoken
              jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(error,token)=>{
                  res.json({
                    success : true,
                    token : "Bearer " + token,
                    code : 0,
                    msg : "登录成功"
                  })
              })
      ```

      就是把原来的yangmr改为**Bearer**

		12. 修改current接口返回的数据

      ```javascript
      //验证token接口
      router.get("/current",passport.authenticate("jwt",{session : false}),(req,res)=>{
        res.json({
          id : req.user.id,
          name : req.user.name,
          email : req.user.email
        })
      })
      ```

      

### 11.29 增加身份字段及接口调试

  1. 在User.js文件添加身份字段

     ```javascript
     identity: {
         type : String
       },
     ```

		2. 在注册接口在添加身份字段

     ```javascript
     const newUser = new User({
             name : req.body.name,
             email : req.body.email,
             avatar,
             password : req.body.password,
             identity : req.body.identity
           });
     ```

		3. 在登录接口密码匹配那块在加入avatar和身份字段identity

     ```javascript
     const rule = {
               id:user.id,
               name:user.name,
               avatar : user.avatar,
               identity : user.identity
             };
     ```

		4. 在current接口再把身份权限identity返回出去

     ```javascript
     res.json({
           id: req.user.id,
           name: req.user.name,
           email: req.user.email,
           identity: req.user.identity
         });
     ```

		5. 在User.js文件内设置identity为必填

     ```javascript
     identity: {
         type : String,
         required : true
       },
     ```

     

		6. 最后，对接口在进行测试

### 11.30 数据信息接口介绍

![image-20191106141709176](/Users/yangling/Library/Application Support/typora-user-images/image-20191106141709176.png)

![image-20191106141822834](/Users/yangling/Library/Application Support/typora-user-images/image-20191106141822834.png)

![image-20191106141852303](/Users/yangling/Library/Application Support/typora-user-images/image-20191106141852303.png)

### 11.31 配置信息接口

  1. 在model文件夹内创建Profile.js文件,该文件内主要是编写对数据的增加，修改，删除，更新等接口

  2. 在Profiles.js文件内设置schema和模型

  3. ```javascript
     //引入mongoose
     const mongoose = require("mongoose");
     //获取schema
     const Schema = mongoose.Schema;
     //实例化schema，并定义字段
     const ProfileSchema = new Schema({
       type : {
         type : String
       },
       describe : {
         type : String
       },
       income : {
         type : String,
         required : true
       },
       expend : {
         type : String,
         required : true
       },
       cash : {
         type : String,
         required : true
       },
       remark: {
         type : String
       },
       date : {
         type : Date,
         default : Date.now
       }
     });
     //创建模型
     const Profile = mongoose.model("profile",ProfileSchema);
     //导出模型
     module.exports = Profile;
     ```

		4. 在app.js文件内引入profiles.js

     ```javascript
     //引入profiles.js二级路由
     const profiles = require("./routes/api/profiles.js");
     ```

  5. 注册一级路由加载profiles.js二级路由

     6. ```javascript
       app.use("/api/profiles",profiles);
       ```
     ```
     
     ```

		7. 在api文件夹内创建profiles.js二级路由文件

### 11.32 添加信息接口

```javascript
//添加信息接口
router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profileFields = {};

    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    new Profile(profileFields).save().then(profile => {
      res.json(profile);
    });
  }
);
```

### 11.33 获取所有以及单个信息

```javascript
//获取所有信息接口
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find()
      .then(profile => {
        if (!profile) {
          return res.status(404).json('没有任何内容');
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

//获取单个信息接口
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ _id: req.params.id })
      .then(profile => {
        if (!profile) {
          return res.status(404).json('没有任何内容');
        }

        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
```

### 11.34 编辑和删除信息接口

```javascript
//编辑信息接口
router.post(
  '/edit/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const profileFields = {};

    if (req.body.type) profileFields.type = req.body.type;
    if (req.body.describe) profileFields.describe = req.body.describe;
    if (req.body.income) profileFields.income = req.body.income;
    if (req.body.expend) profileFields.expend = req.body.expend;
    if (req.body.cash) profileFields.cash = req.body.cash;
    if (req.body.remark) profileFields.remark = req.body.remark;

    Profile.findOneAndUpdate(
      { _id: req.params.id },
      { $set: profileFields },
      { new: true }
    ).then(profile => res.json(profile));
  }
);

//删除信息接口
router.delete(
  '/delete/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ _id: req.params.id })
      .then(profile => {
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json('删除失败!'));
  }
);
```

### 11.35 前后端连载

### 11.36 项目总结

		1. 后台接口总结
  		2. 前台element-ui框架总结
  		3. 功能点总结
  		4. 扩展
         		1. 登录与注册的扩展
         		2. 项目的扩展
         		3. 个人技术栈的扩展

