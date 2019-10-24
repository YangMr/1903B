
//localStroage保存数据
var STORAGE_KEY = 'todos-vuejs'//名称
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}		

		
var vm=new Vue({
  el: '#vue-todolist',
  data: {
  	items:todoStorage.fetch(),//直接从localstroage拿数据
  	inputVaule:""
  },
  mounted:function(){/*ready*/

  },
  methods:{
  	add:function(){
  		var _this=this;
  		this.items.push({text:this.inputVaule,completed:true});
  		this.inputVaule="";
  	},
    removeTodo: function (todo) {
      this.items.splice(this.items.indexOf(todo), 1)
    }
  },

  watch:{
  	items:{
  		handler:function(items){
  			todoStorage.save(items)
  		},
  		deep:true
  	}
  }
})

		
		