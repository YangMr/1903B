<template>
  <div id="app">
    <app-header></app-header>  
    <router-view/>
    <app-nav></app-nav>
  </div>
</template>

<script>
import Nav from "./components/common/Nav.vue"
import Header from "./components/common/Header.vue"
export default {
  name: 'App',
  components :{
      "appNav" : Nav,
      "appHeader" : Header
  }
}
</script>

<style>
    *{margin: 0; padding: 0;}
    ul,ol{list-style: none;}
</style>
