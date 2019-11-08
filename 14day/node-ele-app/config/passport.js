const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//引入keys.js
const keys = require("./keys");

//引入mongoose模块
const mongoose = require("mongoose");

//引入User.js模型
const User = require("../model/User.js");

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;


//导出函数
module.exports = (passport)=>{
  passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
    //查询数据
    User.findById(jwt_payload.id).then(user=>{
      //如果有数据
      if(user){
          return done(null,user);
      }

      return done(null,false);

    }).catch(error=>{
      console.log(error)
    })
  })
);
}
