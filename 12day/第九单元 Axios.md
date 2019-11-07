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

### 11.2 设置Register和404组件

### 11.3 搭建element注册表单

### 11.4 验证表单和按钮

### 11.5 加载动画和消息提醒

### 11.6 路由守卫和token过期处理

### 11.7 解析token并存储到vuex中

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

     ```javascript
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

