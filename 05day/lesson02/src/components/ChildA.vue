<template>
    <div class="">
        <h1>我是子组件A</h1>
        <hr>
        <p>{{count}}</p>
        <hr>
        <button @click="sendB" type="button" name="button">将A组件的数据传递到B组件</button>
    </div>
</template>

<script>
  import bus from "../eventBus"
  export default {
    data() {
      return {
          count :0
      }
    },
    created() {
    },
    methods: {
        sendB(){
            this.count++;
            bus.$emit("sendCount",this.count)
        }
    }
  }
</script>

<style>
</style>
