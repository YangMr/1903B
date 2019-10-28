<template>
  <div class="">
    <h1>我是自组件，我要给父组件传递数据</h1>
    <hr>
    <p>{{message}}</p>
    <hr>
    <button @click="test" type="button" name="button">将我想好好学习传递给父组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {

          message : "我想好好学习"

      }
    },
    created() {
    },
    methods: {
      test(){
        //子组件给父组件传递数据的方式
        this.$emit("was",this.message)
      }
    }
  }
</script>

<style>
</style>
