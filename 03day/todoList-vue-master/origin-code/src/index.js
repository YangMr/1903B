import Vue from 'vue'

let vm = new Vue({
    el: '#app',
    data() {
        return {
            todoLists: [],
            newTodo: '',
            dataStatus: ['All', 'Active', 'Completed'],
            dataStatusIndex: 0,
            whichShow: true,
            defaultShow: true,
            cookieKey: 'todo-vue',
            all: false
        }
    },
    computed: {
      times() {
          let todoArr = this.todoLists
          let times = 0
          todoArr.forEach(item => {
              if(item.isCompleted === false) {
                  times++
              }
          })
          return times
      }
    },
    methods: {
        //功能1 input 监听enter键 按下时添加
        addTodo() {
            let value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todoLists = this.todoLists.concat({
                id: Date.now(),//id
                value: value,//输入框的内容
                isEditing: false,//是否被编辑
                isActive: false,//删除按钮是否被激活
                isCompleted: false//是否完成了
            })
            this.newTodo = '';
            window.localStorage.setItem(this.cookieKey, JSON.stringify(this.todoLists))
        },
        deleteTodo(index) {
            this.todoLists.splice(index,1)
            window.localStorage.setItem(this.cookieKey, JSON.stringify(this.todoLists))
        },
        toEdit(obj){
            obj.isEditing = true
        },
        unEdit(obj){
           obj.isEditing = false
        },
        liCompleted(index){
            this.todoLists.forEach((item,i) => {
                if(i === index){
                    item.isCompleted = !item.isCompleted
                }
            })
            window.localStorage.setItem(this.cookieKey, JSON.stringify(this.todoLists))
        },
        selectAllTodos(){
            this.todoLists.forEach(todo => {
                if(this.all === true){
                    todo.isCompleted = !todo.isCompleted
                }else {
                    todo.isCompleted = true
                }
            })
            this.all =  !this.all
        },
        clearTodos() {
            this.todoLists = this.todoLists.filter(todo => todo.isCompleted === false)
            window.localStorage.setItem(this.cookieKey, JSON.stringify(this.todoLists))
        },
        switchStatus(index){
            this.dataStatusIndex = index
            if (this.dataStatus[index] === "Active") {
                this.defaultShow = false
                this.whichShow = false
            } else if (this.dataStatus[index] === "Completed") {
                this.defaultShow = false
                this.whichShow = true
            } else if (this.dataStatus[index] === "All") {
                this.defaultShow = true
            }
        }

    },
    created() {
        let myStorage = window.localStorage.getItem(this.cookieKey)
        if(!myStorage) {
           window.localStorage.setItem(this.cookieKey, JSON.stringify(this.todoLists))
        }
        this.todoLists = JSON.parse(myStorage) || []
    },
    directives: {
        "todo-focus" : function (el,binding) {
            if(binding.value){
                el.focus()
            }
        }
    }
})