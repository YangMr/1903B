# todolist

## 1.创建项目
    vue init webpack-simple todolist

## 2. 进入项目目录
    cd todolist

## 3. 下载项目所需要的依赖
    cnpm install

## 4. 启动项目，测试项目是否有问题
    npm run dev

## 5. 在src目录内创建components文件夹
    components

## 6. 在components目录下分别创建 Header.vue, List.vue, Item.vue, Footer.vue组件

## 7. 在App.vue组件引入Header.vue, List.vue,Footer.vue组件,并进行注册，注册之后进行引用展示

    components : {
        组件名
    }

## 8.在App.vue组件定义初始化的数据,并传递到list组件，并进行渲染展示

    data:function(){
        return {
            todos : [
                {title : "我今天要学习todolist", complete : false},
                {title : "我今天要学习router路由", complete : true},
                {title : "我今天要学习vuex", complete : false}
            ]
        }
    }

## 9.在list组件接收父组件的数据，引入item组件,并遍历item组件，把item和index传递过去

## 10. 在item组件展示数据

## 11. 完成添加功能，在父组件定义添加数据的方法，在传递给header组件，在header组件内





-------------------------

## 1. 创建项目

## 2. 在项目内创建组件，并进行注册显示

## 3. 完成初始数据的展示

## 4. 完成添加数据功能

## 5. 完成鼠标移入展示删除按钮与鼠标移除隐藏删除按钮功能

## 6. 完成点击删除按钮删除数据功能

## 7. 完成删除选中功能

## 8. 完成选中个数的展示与总个数的展示

## 9. 完成点击全选按钮，让所有复选框选中或不选中功能

## 10. 完成点击单个复选框所有选中，让全选框选中，有一个单个复选框没有选中，就让全选框不选中
