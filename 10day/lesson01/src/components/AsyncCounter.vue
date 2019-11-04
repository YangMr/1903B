<template>
  <div class="">
    <button type="button" @click="increment">Increment</button>
    <button type="button" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    data() {
      return {
      }
    },
    created() {
    },

    methods: {
      // ...mapActions([
      //   "increment",
      //   "decrement"
      // ])
      increment(){
        this.$store.dispatch("increment",{num : 20, time:3000});
        this.$store.dispatch("asyncIncrement")
      },
      decrement(){
        this.$store.dispatch("decrement",{num : 20, time:3000})
        this.$store.dispatch("asyncDecrement")
      }
    }
  }
</script>

<style>
</style>
