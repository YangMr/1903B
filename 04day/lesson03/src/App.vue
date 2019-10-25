<template>
  <div id="app">
			<h3>我是父组件的:{{count}}</h3>
			<hr>
			<Child @getNum="get"></Child>
  </div>
</template>

<script>
import Child from "./components/Child"	
export default {
  name: 'app',
  data () {
    return {
      count : 0
    }
  },
	methods : {
		get(data){
			this.count = data
		}
	},
	components: {
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
</style>
