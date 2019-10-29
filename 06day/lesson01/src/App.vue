<template>
  <div id="app">

      <button type="button" @click="selectedComponent = 'appHeader'">show Header</button>
      <button type="button" @click="selectedComponent = 'appQuote'">show Quote</button>
      <button type="button" @click="selectedComponent = 'appFooter'">show Footer</button>

      <h1>{{selectedComponent}}</h1>

      <hr>
      <keep-alive>
          <component :is="selectedComponent">
              <h1 slot="title">我想好好学习</h1>
              <p slot="auth">auther : yang</p>
          </component>
      </keep-alive>


      <!-- <app-quote>
        <h1 slot="title">我想好好学习</h1>
        <p slot="auth">auth:yang</p>
      </app-quote> -->


  </div>
</template>

<script>
import Quote from "./components/Quote.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  name: 'app',
  data () {
    return {
      selectedComponent : "appQuote"
    }
  },
  components:{
      "appQuote" : Quote,
      "appHeader" : Header,
      "appFooter" : Footer
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
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
