<template>
  <div class="">
    <button type="button" @click="increment">Increment</button>
    <button type="button" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      increment(){
        this.$store.commit("increment",10)
      },
      decrement(){
        this.$store.commit("decrement",10)
      }
    }
  }
</script>

<style>
</style>
