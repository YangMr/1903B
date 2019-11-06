//引入express
const express = require("express");

//获取路由实例
const router = express.Router();

//引入User.js
const User = require("../../model/User.js");

//密码加密模块
const bcrypt = require('bcrypt');

//引入gravatar模块
const gravatar = require("gravatar");

//配置测试接口
router.get("/test",(req,res,next)=>{
  res.json({msg : "login work"});
})

//注册接口
router.post("/register",(req,res,next)=>{

  //查询数据库有没有当前要注册的邮箱账号,如果有，则不能进行注册，要给前台返回信息，邮箱已注册，如果没有进行注册，那么可以将前台发送过来的数据存储到数据库
  User.findOne({email : req.body.email}).then((user)=>{
    if(user){
      res.json({msg : "邮箱已经被注册!"});
    }else{
      //获取注册的图像
      var avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
      //如果没有注册，则将数据存储到数据库
      const newUser = new User({
        name : req.body.name,
        password : req.body.password,
        avatar,
        email : req.body.email
      });
      //对密码进行加密
      bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(newUser.password, salt, (error, hash) =>{
          if(error) console.log(error)
          newUser.password = hash;

          //将数据存储到数据库
          newUser.save().then(response=>{
            res.json({code : 0, msg: "注册成功", data : response});
          }).catch(error=>{
            console.log("数据注册失败:" + error)
          })
        });
      });

    }
  }).catch(error=>{
    console.log(error);
  })

})

// 导出路由
module.exports = router;
