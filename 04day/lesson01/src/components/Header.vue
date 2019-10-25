<template>
	<div class="header">
		<h1>{{message}}</h1>
	</div>
</template>

<script>
	export default {
		name : "Header",
		data : function(){
			return {
				message : "This is my header"
			}
		}
	}
</script>

<style scoped="scoped">
	
	.header{
		width: 100%;
		height: 80px;
		background: #333;
		text-align: center;
		line-height: 80px;
	}
	
	
</style>
