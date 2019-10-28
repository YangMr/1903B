<template>
  <div id="app">
      <ChildA></ChildA>

      <hr>

      <ChildB></ChildB>
  </div>
</template>

<script>
//引入childa组件
import ChildA from "./components/ChildA.vue"
//引入childb组件
import ChildB from "./components/ChildB.vue"

export default {
    name: 'app',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    components:{
        ChildA,
        ChildB
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
