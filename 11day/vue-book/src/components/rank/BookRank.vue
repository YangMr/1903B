<template>
  <div>
    我是排行组件
  </div>
</template>

<script>
  import api from "../../api/api"
  export default {
    data() {
      return {
      }
    },
    created() {
      api.getRankType().then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error);
      })
    },
    methods: {
    }
  }
</script>

<style>
</style>
