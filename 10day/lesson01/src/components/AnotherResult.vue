<template>
  <div class="">
    <p>{{counter}}</p>

    <p>{{num}}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default {
    data() {
      return {

      }
    },
    created() {
    },
    methods: {
    },
    computed : {
      // ...mapGetters({
      //   "counter" : "dobuleCounter",
      //   "num" : "dobuleNum"
      // })
      // ...mapGetters([
      //   "dobuleCounter",
      //   "dobuleNum"
      // ])
      counter(){
        return this.$store.getters.dobuleCounter;
      },
      num(){
        return this.$store.getters.dobuleNum
      }
    }
  }
</script>

<style>
</style>
