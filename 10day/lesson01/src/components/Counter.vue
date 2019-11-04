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
        console.log(this.$store.state.counter)
        this.$store.state.counter++;
      },
      decrement(){
        this.$store.state.counter--;
      }
    }
  }
</script>

<style>
</style>
