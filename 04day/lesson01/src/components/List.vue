<template>
	<div>
		<ul class="left">
			<app-item v-for="(item,index) in 10"></app-item>
		</ul>
	</div>
</template>

<script>
	import Item from "./common/Item.vue"
	export default {
		data : function(){
			return {
				
			}
		},
		components: {
			appItem : Item
		}
	}
	
</script>

<style>
	.left{
		width: 400px;
		border: 1px solid #ccc;
		background: #fff;
		list-style: none;
		border-radius: 3px;
		padding: 20px;
		float: left;
	}
	.left li{
		height: 33px;
		line-height: 33px;
	}
</style>
