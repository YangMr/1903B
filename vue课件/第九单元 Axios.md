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
     	mongoURI : "mlab数据库的地址"
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

     

### 11.24 搭建注册接口并存储数据

### 11.25 使用全球公认头像gravatar

### 11.26 搭建登录接口

### 11.27 使用jwt实现token

### 11.28 使用passport-jwt验证token

### 11.29 增加省份字段及接口调试

### 11.30 数据信息接口介绍

### 11.31 配置信息接口

### 11.32 更改数据库接口地址

### 11.33 添加信息接口

### 11.34 获取所有以及单个信息

### 11.35 编辑和删除信息接口

### 11.36 前后端连载

### 11.37 项目总结

