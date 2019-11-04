# 第八单元 Vuex

[toc]



## 一、本章介绍

​		上一章我们学习了vue-router路由,它是用vue构建大型应用的基石之一，它也可以用来构建但也应用，当然也可以用于构建更大的应用，谈到大型应用，还有一件事情我们没有深入的讲解过，那就是更好的状态管理方式。

​		状态管理其实我们在之前已经讲到过，我们当时用自定义事件从自组件向父组件传递数据，或者用props反向传递，或者用eventBus来管理状态。

​		在这一章，我们来学习另外一种管理状态的方法，它在较大的应用里面特别好用，其他状态管理的方法迟早会给我们带来各种各样的问题，接下来，我们就来看看这个叫做vuex的状态管理库。

## 二、为什么要使用一个不同的管理状态机制

![image-20191103210458262](/Users/yangling/Library/Application Support/typora-user-images/image-20191103210458262.png)

![image-20191103210606288](/Users/yangling/Library/Application Support/typora-user-images/image-20191103210606288.png)

​		在前面我们也涉及到状态管理，但是当我们在进行多层组件之间数据传递时会变的特别麻烦，特别难以理解以及维护，比如孙子组件给父组件的同级组件传递数据，我们需要将数据或方法传递到父组件，然后父组件在传递到父组件的父组件，父组件的父组件在传递给自己的子组件，所以会变得特别麻烦。

​		说到这里有的同学会说非父子组件之间的通信也可以用**eventBus中央事件总线**来进行处理，但是当我门在开发大型应用时，组件之间的关系会变的的越来越复杂，而eventBus实例的代码也将会越来越多，变的难以跟踪和维护。

​		所以，vue给我门提供了另外一种状态管理机制的方法，就是我们今天要讲的vuex。

## 三、理解:"集中的状态"

## 四、使用集中状态

  1. 安装vuex

     cnpm install vex --save

		2. 引入

     import Vue from "vue"

     import Vuex from "vuex"

		3. 注册Vuex

     Vue.use(Vuex)

		4. 创建vuex的实例，并导出

     let store = new Vuex.Store({

     ​	//state里面存储的是状态

     ​	state : {

     ​	

     ​	}

     });

     //导出vuex的实例

     export default store

		5. 挂载到vue实例上

     import store from "./store/store.js"

     new Vue({
       el: '#app',
       router,
       store,
       components: { App },
       template: '<App/>'
     })

		6. 如何获取vuex里面存储的状态

     全局获取：

     ​	$store.state.counter;

     局部获取:

     ​	this.$store.state.counter

## 五、为什么集中状态自身并不能解决问题

## 六、理解Getter

## 七、使用Getter

## 八、将Getter映射到属性

## 九、理解Mutation

## 十、使用Mutation

## 十一、为什么Mutation要使用同步执行模式

## 十二、Action怎么改进了Mutation

## 十三、使用Action

## 十四、将Action映射到方法

## 十五、Vuex总结

## 十六、双向绑定(v-model)和Vuex

## 十七、改进的目录结构

## 十八、模块化状态管理

## 十九、使用分割的文件

## 二十、使用名字空间来避免命名冲突问题

