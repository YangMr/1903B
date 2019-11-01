<template>
  <div id="app">
    <button type="button" @click="go" name="button">跳转到dist组件</button>
    <hr>
    <button @click="goHello" type="button" name="button">跳转到helloh6 world</button>
    <img src="./assets/logo.png">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods : {
    goHello(){
      this.$router.push({path : "/h"})
    },
    go(){
      this.$router.push({name : "dist"})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
