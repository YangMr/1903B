<template>
    <div class="">
        分类
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
        axios.get("http://47.94.231.184/cats/lv2/statistics").then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    },
    methods: {
    }
  }
</script>

<style>
</style>
