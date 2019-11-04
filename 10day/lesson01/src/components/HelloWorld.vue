<template>
  <div class="hello">
    <h1>Vuex</h1>
    <hr>
    <app-result></app-result>
    <hr>
    <app-another-result></app-another-result>
    <hr>
    <app-counter></app-counter>
    <hr>
    <app-another-counter></app-another-counter>
    <hr>
    <app-async-counter></app-async-counter>
    <hr>

    <input type="text" v-model="value">
    <p>{{value}}</p>

  </div>
</template>

<script>
import Counter from "./Counter.vue"
import Result from "./Result.vue"
import AnotherResult from "./AnotherResult.vue"
import AnotherCounter from "./AnotherCounter.vue"
import AsyncCounter from "./AsyncCounter.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  computed : {
    value : {
      get(){
          return this.$store.getters.value
      },
      set(value){
        this.$store.commit("value",value)
      }
    }
  },
  components : {
    "appCounter" : Counter,
    "appResult" : Result,
    "appAnotherResult" : AnotherResult,
    "appAnotherCounter" : AnotherCounter,
    "appAsyncCounter" : AsyncCounter
  },
  methods : {
    // get(event){
    //   this.$store.commit("value",event.target.value)
    // }
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
