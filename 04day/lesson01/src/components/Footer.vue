<template>
	<div class="footer">
		<h1>{{message}}</h1>
	</div>
</template>

<script>
	export default {
		name : "Footer",
		data : function(){
			return {
				message : "This is my footer"
			}
		}
	}
	
	
</script>

<style>
	.footer{
		width: 100%;
		height: 80px;
		background: #ccc;
		position: fixed;
		bottom:0;
		text-align: center;
		line-height: 80px;
	}
</style>
