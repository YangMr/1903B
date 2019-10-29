<template>
    <div class="">
        <h1>我是header组件</h1>

        {{count}}

        <p>
            <button type="button" @click="count++">count++</button>
        </p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          count : 0
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
