var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//引入mongoose模块，这个模块用来连接mongodb数据库
const mongoose = require("mongoose");

//引入数据库服务器地址文件 keys.js
const db = require("./config/keys.js").mongoURI;

var app = express();

const bodyParser = require('body-parser')
//配置bodyParser模块，配置好之后post方式就能接收到数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//连接mongodb数据库
mongoose.connect(db,{useNewUrlParser: true}).then(()=>{
  console.log("数据库连接成功");
}).catch(error=>{
  console.log("数据库连接失败:" + error);
})

//引入users二级路由文件
const users = require("./routes/api/users");

//通过一级路由去加载二级路由
app.use("/api/users",users);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
