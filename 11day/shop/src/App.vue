<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue"
export default {
  name: 'App',
  components : {
    "appHeader" : Header
  }
}
</script>

<style>
  html,body,div,a,h1,h2,h3,h4,h5,h6,ul,li,p,dl,dt,dd{
    margin: 0;
    padding: 0;
  }
  ul,ol{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
</style>
