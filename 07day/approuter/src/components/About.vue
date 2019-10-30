<template>
    <div class="about">
        <h1>我是关于页面</h1>
        <hr>
        <!-- {{$route.params.id}} -->
        接收首页传递过来的数据，值为： {{id}}
    </div>
</template>

<script>
  export default {
    data() {
      return {
          id : this.$route.params.id
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
