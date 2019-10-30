<template>
    <div class="detail">
        <h1>我是详情页面</h1>
        <p>{{data}}</p>
        <p>{{id}}</p>
        {{name}}
    </div>
</template>

<script>
  export default {
    data() {
      return {
          data : this.$route.params,
          id : this.$route.params.id,
          name : this.$route.params.name
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
