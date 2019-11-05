<template>
  <div class="book">
      <mt-button type="primary">添加小说</mt-button>
  </div>
</template>

<script>
import { Button } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .book{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
