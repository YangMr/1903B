<template>
	<div>
		
		<h2>我是子组件的:{{num}}</h2>
		
		<hr>
		
		<button @click="add">clicks</button>
	</div>
</template>

<script>
	export default {
		
		data : function(){
			return {
				num : 0
			}
		},
		methods : {
			add(){
				this.num++;
				
				//子组件给父组件传递数据的方式
				this.$emit("getNum",this.num)
			}
		}
		
		
	}
	
	
</script>

<style>
</style>
