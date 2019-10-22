# VUE

[toc]

## 课程目标：

1. **学会从简单到复杂企业级应用的VueJS程序编写方法**
2. **能在单页和多页应用中自如使用VueJS**
3. **真正理解VueJS的背后原理，并在真实项目中应用它们**

### 一、什么是vue？

Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

### 二、什么是mvc？什么是mvp？什么是mvvm？

1. mvc：

   MVC是应用最广泛的软件架构之一，一般`MVC`分为：

   `Model（ 模型 ）`、`Controller（ 控制器 ）`、`View（ 视图 ）`。

   这主要是基于分层的目的，让彼此的职责分开。`View` 一般通过 `Controller` 来和 `Model` 进行联系。`Controller`是 `Model` 和 `View` 的协调者，`View`和`Model`不直接联系。基本联系都是单向的。

   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020105.png)

   - View 传送指令到 Controller
   - Controller 完成业务逻辑后，要求 Model 改变状态
   - Model 将新的数据发送到 View，用户得到反馈

2. mvp：

   MVP 模式将 Controller 改名为 `Presenter`，同时改变了通信方向。

   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020109.png)

   - 各部分之间的通信，都是双向的。
   - View 与 Model 不发生联系，都通过 Presenter 传递。
   - View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

3. mvvm：

   `MVVM` 是把 `MVC` 的 `Controller` 和 `MVP` 的 `Presenter` 改成了 `ViewModel`。

   `View` 的变化会自动更新到 `ViewModel`，`ViewModel` 的变化也会自动同步到 `View`上显示。这种自动同步是因为 `ViewModel` 中的属性实现了 `Observer`，当属性变更时都能触发对应的操作。

   ![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png)

   ![](https://box.kancloud.cn/6cd48b5695f80a6a253cd2c00d074214_1055x572.png)

### 三、mvvm模式的优点以及mvc模式的区别？

 1. **MVVM模式的优点：**

     	1. `低耦合：`视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
     	2. `可重用性：`你可以把一些视图逻辑放在一个ViewModel里面，让很多 view 重用这段视图逻辑。
     	3. `独立开发：`开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
     	4. `可测试：`界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

 2. **MVVM 和 MVC 的区别：**

    `mvc` 和 `mvvm` 其实区别并不大。都是一种设计思想。

    > 主要区别
    >
    > mvc 中 Controller演变成 mvvm 中的 viewModel，
    >
    > mvvm 通过数据来显示视图层而不是节点操作。

    > mvvm主要解决了:
    >
    > mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。

### 三、vue核心点是什么？

1. 数据驱动，也叫双向数据绑定。

   > vue.js数据观测原理在技术实现上，利用的是ES5Object.defineProperty和存储器属性: getter和setter（所以只兼容IE9及以上版本），可称为基于依赖收集的观测机制。核心是VM，即ViewModel，保证数据和视图的一致性。

2. 组件系统

   .vue组件的核心选项:

   > 1、模板（template）：模板声明了数据和最终展现给用户的DOM之间的映射关系。
   > 2、初始数据（data）：一个组件的初始数据状态。对于可复用的组件来说，这通常是私有的状态。
   > 3、接受的外部参数(props)：组件之间通过参数来进行数据的传递和共享。
   > 4、方法（methods）：对数据的改动操作一般都在组件的方法内进行。
   > 5、生命周期钩子函数（lifecycle hooks）：一个组件会触发多个生命周期钩子函数，最新2.0版本对于生命周期函数名称改动很大。
   > 6、私有资源（assets）：Vue.js当中将用户自定义的指令、过滤器、组件等统称为资源。一个组件可以声明自己的私有资源。私有资源只有该组件和它的子组件可以调用。

### 四、vue市场份额？

[https://juejin.im/post/5d17740df265da1bcd37ed45](https://juejin.im/post/5d17740df265da1bcd37ed45)

### 五、什么是组件式开发？

[https://www.cnblogs.com/yinhaiying/p/10985476.html](https://www.cnblogs.com/yinhaiying/p/10985476.html)

### 六、什么是渐进式框架？

**渐进式代表的含义是：没有多做职责之外的事。**

`vue.js`只提供了 `vue-cli` 生态中最核心的 `组件系统` 和 `双向数据绑定`。

像`vuex`、`vue-router`都属于围绕 `vue.js`开发的库。

> 比如说，你要使用Angular，必须接受以下东西：

- 必须使用它的模块机制
- 必须使用它的依赖注入-
- 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）

所以Angular是带有比较强的排它性的，如果你的应用不是从头开始，而是要不断考虑是否跟其他东西集成，这些主张会带来一些困扰。

> Vue与React、Angular的不同是，但它是`渐进的`：

- 你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；
- 也可以整个用它全家桶开发，当Angular用；
- 还可以用它的视图，搭配你自己设计的整个下层用。
- 你可以在底层数据逻辑的地方用OO和设计模式的那套理念，
- 也可以函数式，都可以，它只是个轻量视图而已，只做了最核心的东西。

### 七、什么是虚拟dom？

1. 什么是虚拟dom？

   Vue将DOM抽象为虚拟DOM，虚拟DOM其实就是用一个对象来描述DOM，通过对比前后两个对象的差异，最终只把变化的部分重新渲染，提高渲染的效率

2. 为什么用虚拟dom？

   当DOM发生更改时需要遍历DOM对象的属性,  而原生DOM可遍历属性多达200多个个, 而且大部分属性与渲染无关, 导致更新页面代价太大。

3. 虚拟dom的处理方式？

   1） 用 JS对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中。
   2）当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异。
   3） 把记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

### 八、如何使用vue？

1. 安装vue

   - 本地安装
     - 可以直接下载Vue,后面我们会演示
     - 或者像我现在一样,直接从CDN获取,引入到我们的服务器中,点击unpkg,然后直接复制url,项目中引入该链接,就能获取到Vue

   - 命令安装（也就是使用vue-cli脚手架）
     - 后面课程,我们会使用复杂的(也就是命令安装),通过webpack配置来打包所有文件
   
2. 使用

   - 在html页面进行引入

     ```vue
     <script src="js/vue.min.jd"></script>
     ```

### 九、vue实例

1. 进行实例化

   ```vue
   <script>
     new Vue({
       el : "#app",
       data : {
   
       },
       methods : {
   
       }
     })
   </script>
   ```

   - new Vue({}) : 实例化vue
   - el ：`el`属性接受一个字符串,该字符串定义了Vue实例能控制的HTML片段.
   - data ：定义初始化时所需要的数据
   - methods ：定义方法的地方

2. 插值与表达式

   ​	使用双大括号(Mustache 语法)“{{}}”是最基本的文本插值方法，它会自动将我们双向绑 定的数据实时显示出来，例如: 

   ```vue
   <div id=”app”> 
     {{book}}
   <div> 
   <script>
     var app =new Vue({
       el :’# app ’,
       data: {
       	book:’ <Vue.js实战》’
       }
     })
   <script>
   ```

   ​	大括号里的内容会被替换为《Vue扣实战》，通过任何方法修改数据 book，大括号的内容都 会被实时替换，比如下面的这个示例，实时显示当前的时间，每秒更新: 

   ```vue
   <div id=”app”> 
   	{{ date }}
   <div>
   
   <script>
   	var app = new Vue({
   		el : "#app",
   		data : {
   			date : new Date()
   		},
   		mounted : function(){
   			var _this = this;
   			this.timer = setInterval(function(){
   				_this.date = new Date()
   			},1000)
   		},
   		beforeDestory : function(){
   			if(this.timer){
   				clearInterval(this.timer);
   			}
   		}
   	})
   </script>
   ```

   

3. 使用v-on实现数据的双向绑定

4. 使用v-on实现数量的加减

5. 使用v-on实现文本框的验证

### 十、vue指令及修饰符

1. **什么是指令？**

   指令(Directives)是 Vue.js模板中最常用的一项功能，它带有前缀"v-" 的 HTML 特性， 它绑定一个表达式，并将一些特性应用到 DOM 上.  

2. **vue常用基本指令？**

   2.1 v-cloak

   ​	v-cloak不需要表达式，它会在 Vue 实例结束编译时从绑定的 HTML 元素上移除 ， 的 display: none;配合使用: 

   ```vue
   <div id=” app” v-cloak> 
   	{{message ))
   </div>
   <script>
     varapp= new 飞lue({ e l : ’ #a p p ’ ,
     data: {
     message : ’这是一段文本 ’
     })
   </script>
   ```

   ​	这时虽然己经加了指令 v-cloak，但其实并没有起到任何作用，当网速较慢、 Vue.js 文件还没 加载完时，在页面上会显示{ { message }}的字样，直到 Vue 创建实例、编译模板时， DOM 才会被 替换，所以这个过程屏幕是有闪动的。只要加一句 css就可以解决这个问题了: 

   ```css
   [v-cloak]{
   	display : none;
   }
   ```

   ​	在一般情况下， v-cloak 是一个解决初始化慢导致页面闪动的最佳实践，对于简单的项目很实 用，但是在具有工程化的项目里，比如后面进阶篇将介绍 webpack和vue-router时，项目的HTML 结构只有一个空的 div元素，剩余的内容都是由路由去挂载不同组件完成的，所以不再需要 v-cloako 

   2.2  **v-once**

   2.3  **v-if、 v-else-if、 v-else**

   2.4  **v-show**

   2.5  **v-for**

   2.6. **修饰符**
   
   2.7  **实战：利用计算属性、指令等知识开发购物车**
   
   
   
   