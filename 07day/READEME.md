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

## 8.在App.vue组件定义初始化的数据

    data:function(){
        return {
            todos : [
                {title : "我今天要学习todolist", complete : false},
                {title : "我今天要学习router路由", complete : true},
                {title : "我今天要学习vuex", complete : false}
            ]
        }
    }
