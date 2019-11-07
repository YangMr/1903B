//引入axios
import axios from "axios";

//引入element-ui的loading组件
import { Loading } from 'element-ui';

//引入message消息提示组件
import { Message } from 'element-ui';

//创建一个变量，用来保存的加载动画
let loading = null;

//创建开始动画方法
function startLoading(){
  loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
  })
}
//创建结束动画方法
function endLoading(){
  loading.close();
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //加载动画
    startLoading();

    // 在发送请求之前做些什么
    return config;
  }, function (error) {

    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    //结束动画
    endLoading()

    // 对响应数据做点什么
    return response;
  }, function (error) {
    //结束动画
      endLoading();

      Message.error("响应失败");

    // 对响应错误做点什么
    return Promise.reject(error);
  });

//导出axios
export default axios;
