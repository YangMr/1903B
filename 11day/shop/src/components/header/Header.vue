<template>
  <div class="header">
    <div class="header-center">
        <div class="header-logo">
          <router-link to="/">1903B</router-link>
        </div>
        <nav class="header-nav">
          <ul>
            <li><router-link to="/login">登录</router-link></li>
            <li><router-link to="/register">注册</router-link></li>
            <li><router-link to="/member">个人中心</router-link></li>
          </ul>
        </nav>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
  .header{
    width: 100%;
    background-color: #333;
  }
  .header .header-center{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .header .header-logo{
    float: left;
    height: 50px;
    line-height: 50px;
  }
  .header .header-logo a{
    color: #ddd;
  }
  .header .header-nav{
    float: right;
  }
  .header .header-nav ul{
    overflow: hidden;
  }
  .header .header-nav ul li{
    float: left;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
  }
  .header .header-nav ul li a{
    display: block;
    color: #ddd;
  }
</style>
