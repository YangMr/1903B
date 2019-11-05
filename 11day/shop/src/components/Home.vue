<template>
  <div class="home">
    <div class="home-center">
      <h1>欢迎大家进入1903B</h1>
      <button type="button" @click="goLogin" name="button">登录</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods :{
    goLogin(){
      this.$router.push({name : "login"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-center{
    text-align: center;
    margin-top: 100px;
  }
  .home-center h1{
    font-size: 25px;
    color: purple;
  }
  .home-center button{
    border:1px solid #purple;
    background: purple;
    color: #fff;
    font-size: 14px;
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-top: 50px;
  }
</style>
