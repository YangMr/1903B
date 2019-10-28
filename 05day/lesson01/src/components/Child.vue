<template>
  <div class="">
    <h1>hello</h1>
    <hr>
    <p>{{msg}}</p>
    <hr>
    <p>{{num}}</p>
    <hr>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    props : ["msg","num","message"],
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
</style>
