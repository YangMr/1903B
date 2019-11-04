<template>
  <div class="">
    <p>{{counter}}</p>
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
    },
    computed : {
      counter(){
        return this.$store.getters.dobuleCounter;
      }
    }
  }
</script>

<style>
</style>
