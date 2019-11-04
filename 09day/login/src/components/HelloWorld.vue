<template>
  <div class="hello">
    <button type="button" @click="login">微博登录</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    login(){
      axios({
        method : "get",
        url : "/oauth2/authorize",
        params : {
          client_id : "1824368879",
          redirect_uri : "http://127.0.0.1:8080"
        }
      }).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
