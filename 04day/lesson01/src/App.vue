<template>
  <div id="app">
		 <!-- 头部内容 -->
			<appHeader></appHeader>
			<!-- 中间 -->
			<div class="main">
				
				<p>{{count}}</p>
				<hr>
				<button @click="increment">increment</button>
				<button @click="decrement">decrement</button>
				<button @click="flag=!flag">toggle</button>
				<hr>
				
			<!-- 	<div class="center" v-show="flag"></div> -->
				
				<!-- 中间的列表 -->
				<appList v-show="!flag"></appList>
				<!-- 中间的登录 -->
				<appLogin v-show="flag"></appLogin>
			</div>
			<!-- 底部内容 -->
			<appFooter></appFooter>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"	
import List from "./components/List.vue"
import Login from "./components/Login.vue"
import Header from "./components/Header.vue"
export default {
  name: 'app',
  data () {
    return {
      count : 0,
			flag : false
    }
  },
	components:{
		"appHeader" : Header,
		"appFooter" : Footer,
		"appList" : List,
		"appLogin" : Login
	},
	methods : {
		increment(){
			this.count++;
		},
		decrement(){
			this.count--;
		}
	}
	
}
</script>

<style>
	*{
		margin: 0; 
		padding: 0;
	}
	body{
		background: #ddd;
	}
	.main{
		width: 1000px;
		margin: 20px auto;
		overflow: hidden;
	}
	p{
		text-align: center;
	}
	button{
		padding: 20px;
	}
	.center{
		width: 350px;
		height: 250px;
		background: #fff;
	}
	
</style>
