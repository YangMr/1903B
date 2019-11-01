<template>
  <div id="app">
    <app-title>{{title}}</app-title>
    <router-view/>
    <app-nav @getTitle="get"></app-nav>
  </div>
</template>

<script>
import Nav from "./components/common/Nav.vue"
import Title from "./components/common/Title.vue"
export default {
  name: 'App',
  data : function(){
    return {
      title : "书架"
    }
  },
  components : {
    "appNav" : Nav,
    "appTitle" : Title
  },
  methods : {
    get(data){
        this.title = data
    }
  }
}

</script>

<style>
  *{
    margin: 0;
    padding:0;
  }
  img{
    display: inline-block;
    max-width: 100%;
  }
  .content{
    height: 100%;
    padding: 45px 0 55px 0;

  }
</style>
