<template>
  <div class="content rank">
    我是排行组件
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
      }
    },
    created() {
      axios.get("http://47.94.231.184/ranking/gender").then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    },
    methods: {
    }
  }
</script>

<style>
</style>
