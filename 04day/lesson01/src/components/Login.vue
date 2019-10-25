<template>
	<div class="box">
		<h3>登录</h3>
		<ul>
			<li>
				<label for="">用户名:</label>
				<input type="text" placeholder="请输入用户名">
			</li>
			<li>
				<label for="">密 码:</label>
				<input type="text" placeholder="请输入密码">
			</li>
			<li>
				<button>登录</button>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	.box{
		float: right;
		width: 300px;
		border: 1px solid #ccc;
		background: #fff;
	}
	.box ul{
		list-style: none;
		padding: 20px;
	}
	.box h3{
		font-size: 16px;
		text-align: center;
		border-bottom: 1px solid #ccc;
		height: 33px;
		line-height: 33px;
	}
	.box ul li{
		padding: 10px 0;
	}
</style>
