<template>
    <div class="box">
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

<style>
    .box{
        margin: 20px;
    }
    .item{
        width: 200px;
        height: 88px;
        line-height: 88px;
        text-align: center;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px #333;
    }
</style>
