<template>
  <div id="app">
    <app-title></app-title>

    <router-view/>

    <app-nav></app-nav>
  </div>
</template>

<script>
  import Title from "./components/common/Title.vue"
  import Nav from "./components/common/Nav.vue"

export default {
  name: 'App',
  data : function(){
    return {

    }
  },
  components : {
    "appNav" : Nav,
    "appTitle" : Title
  }
}
</script>

<style>

</style>
