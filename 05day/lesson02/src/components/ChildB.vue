<template>
    <div class="">
        <h1>我是子组件B</h1>
        <hr>
        {{count}}
    </div>
</template>

<script>
    import bus from "../eventBus"
  export default {
    data() {
      return {
          count : null
      }
    },
    created() {

    },
    mounted(){
        bus.$on("sendCount",(data)=>{
            this.count = data
        })
    },
    methods: {
    }
  }
</script>

<style>
</style>
