<template>
  <div id="app">
      <Child msg="jack" :message="a" :num="count"></Child>

      <hr>

      <Test @was="get"></Test>

      <p>{{flag}}</p>
  </div>
</template>

<script>
import Child from "./components/Child.vue"
import Test from "./components/Test.vue"
export default {
  name: 'app',
  data () {
    return {
      count : 100,
      flag : "hello wrold",
      a : null
    }
  },
  components:{
    Child,
    Test
  },
  methods : {
    get(data){
      console.log(data)
      this.flag = data;
      this.a = data;
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
