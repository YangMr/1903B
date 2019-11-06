//引入mongoose
const mongoose = require("mongoose");

//获取Schema
const Schema = mongoose.Schema;

//实例化Schema,并定义字段
const UserSchema = new Schema({
  //用户名
  name : {
    type : String,
    required : true
  },
  //密码
  password : {
    type : String,
    required : true
  },
  //邮箱
  email : {
    type : String,
    required : true
  },
  //头像
  avatar : {
    type : String
  },
  //时间
  date : {
    type : Date,
    default : Date.now
  }
});

//创建模型
const User  = mongoose.model("users",UserSchema)

//导出模型
module.exports = User;
