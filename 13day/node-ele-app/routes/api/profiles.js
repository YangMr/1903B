//引入express
const express = require("express");

//获取路由实例
const router = express.Router();

//引入jsonwebtoken
const jwt = require("jsonwebtoken");


//引入User.js
const Profile = require("../../model/Profile.js");

//引入passport模块
const passport = require("passport");

//配置测试接口
router.get("/test",(req,res,next)=>{
  res.json({msg : "info work"});
});

//添加数据接口
router.post("/add",passport.authenticate("jwt",{session:false}),(req,res)=>{
  //创建一个对象，用来保存要添加的数据
  const profileFields = {};

  //获取添加的数据
  //获取添加收支类型
  if (req.body.type) profileFields.type = req.body.type;
  //获取添加收支描述
  if (req.body.describe) profileFields.describe = req.body.describe;
  //获取添加的收入
  if (req.body.income) profileFields.income = req.body.income;
  //获取添加的支出
  if (req.body.expend) profileFields.expend = req.body.expend;
  //获取添加的现金
  if (req.body.cash) profileFields.cash = req.body.cash;
  //获取添加的备注
  if (req.body.remark) profileFields.remark = req.body.remark;

  console.log(profileFields)

  //对模型进行实例化
  const newProfile = new Profile(profileFields);

  //将数据存储到数据库
  newProfile.save().then(profile=>{
    res.json(profile);
  }).catch(error=>{
    console.log(error);
  })
})


//获取所有信息接口
router.get('/',passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.find().then(profile => {
        if (!profile) {
          return res.status(404).json('没有任何内容');
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);
//获取单一数据接口
router.get('/:id',
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
//编辑数据接口
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
//删除数据接口
router.get(
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
// 导出路由
module.exports = router;
