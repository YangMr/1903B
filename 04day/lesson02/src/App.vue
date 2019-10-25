<template>
  <div id="app">
			<p>{{count}}</p>
			
			<hr>
			
			<button @click="count++">ADD</button>
			
			<hr>
			
			<Child :c= "w" :a="count" b="message"></Child>
			
			<hr>
			<button @click="w+=100">changew</button>
  </div>
</template>

<script>
import Child from "./components/Child"	
export default {
  name: 'app',
  data () {
    return {
      count : 100,
			message : "hello",
			w : 100
    }
  },
	components: {
		// Child : Child
		Child
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

p{
	font-size: 22px;
	font-weight: bold;
}
</style>
