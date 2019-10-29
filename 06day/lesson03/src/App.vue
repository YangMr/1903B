<template>
  <div id="app" class="container">
      <app-header :maxLength="maxLength" :quotes="quotes"></app-header>
      <app-new-quote @sendName="getName"></app-new-quote>
      <app-quote-grid :quotes="quotes" @sendIndex="getIndex"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue"
import NewQuote from "./components/NewQuote.vue"
import Header from "./components/Header.vue"
export default {
  name: 'app',
  data () {
    return {
       quotes :  [
           "Just a Quote to see something"
       ],
       maxLength : 10
    }
  },
  components : {
      "appQuoteGrid" : QuoteGrid,
      "appNewQuote" : NewQuote,
      "appHeader" : Header
  },
  methods : {
      getName(data){
        if(this.quotes.length >= this.maxLength){
            alert("请先进行删除");
            return;
        }
        this.quotes.push(data)
      },
      getIndex(data){
          this.quotes.splice(data,1)
      }
  }
}
</script>

<style>

</style>
