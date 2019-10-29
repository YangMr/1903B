<template>
    <div class="">
        <slot name="title"></slot>
        <slot name="auth"></slot>
        <hr>
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
    deactivated(){
        console.log("动态组件销毁时触发")
    },
    activated(){
        console.log("动态组件激活时触发")
        
    }
  }
</script>

<style>
</style>
