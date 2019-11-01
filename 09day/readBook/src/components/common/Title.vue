<template>
  <div class="title">
    <slot></slot>
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
    }
  }
</script>

<style scoped="scoped">
  .title{
    height: 45px;
    line-height: 45px;
    text-align: center;
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    background: purple;
    color : #fff;
  }
</style>
