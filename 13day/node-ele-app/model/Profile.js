//引入mongoose
const mongoose = require("mongoose");

//获取Schema
const Schema = mongoose.Schema;

//实例化Schema,并定义字段
const ProfileSchema = new Schema({
  //收支类型
  type : {
    type : String
  },
  //收支描述
  describe : {
    type : String
  },
  //收入
  income : {
    type : String,
    required : true
  },
  //支出
  expend : {
    type : String,
    required : true
  },
  //现金
  cash : {
    type : String,
    required : true
  },
  //备注
  remark: {
    type : String
  },
  //时间
  date : {
    type : Date,
    default : Date.now
  }
});

//创建模型
const Profile  = mongoose.model("profile",ProfileSchema)

//导出模型
module.exports = Profile;
