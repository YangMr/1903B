<template>
    <div class="list">
        <h1>我是列表组件</h1>

        {{id}}
        <!-- {{$route.query.a}} -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
          id : this.$route.query
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
