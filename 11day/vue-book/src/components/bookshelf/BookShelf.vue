<template>
  <div>
    <mt-button type="primary" @click="$emit('addBook','分类')" class="add-book" v-if="!books.length">
      添加小说
    </mt-button>
  </div>
</template>

<script>
  export default {
    data(){
        return {
            books : []
        }
    }
  }
</script>

<style>
  .add-book{
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  .add-book:focus{
    outline : none;
  }
</style>
