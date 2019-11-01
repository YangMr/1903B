<template>
  <div class="">
    我是子组件

    <hr>

    <button type="button" @click="go" name="button">child跳转到dist</button>
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
      go(){
        this.$router.push({name : "dist"})
      }
    }
  }
</script>

<style>
</style>
