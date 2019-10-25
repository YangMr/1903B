<template>
	<div>
		<p>{{a}}</p>
		<hr>
		<button>Clicks</button>
		<hr>
		<p>{{b}}</p>
		
		<div class="box" :style="result"></div>
	</div>
</template>

<script>
	export default {
		props : {
			"a" : {
				type : Number,		//设置类型
				default : 0,		//设置默认值
				required : true   //设置必须传值
			},
			"b" : String,
			"c" : Number
		},
		computed: {
			result(){
				return {
					width : this.c + "px"
				}
			}
		}
	}
</script>

<style>
	.box{
		width: 200px;
		height: 200px;
		background: purple;
	}
</style>
