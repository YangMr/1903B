<template>
  <div class="content book">
    <button @click="goCategory" class="addBook" type="button">添加小说</button>
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
      goCategory(){
        this.$router.push({name : "category"})
      }
    }
  }
</script>

<style scoped="scoped">
  .book{
    height: 80vh;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .addBook{
    background: purple;
    color: #fff;
    outline: none;
    border:1px solid purple;
    width: 120px;
    height: 45px;
    border-radius: 3px;
    cursor: pointer;

  }
</style>
