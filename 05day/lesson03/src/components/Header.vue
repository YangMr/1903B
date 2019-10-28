<template>
    <div class="header-input">
        <input @keydown.enter="sendMain" type="text" v-model="taskName" placeholder="请输入要添加的任务">
    </div>
</template>

<script>
    import bus from "../eventBus"
  export default {
    data() {
      return {
          taskName : ""
      }
    },
    created() {
    },
    methods: {
        sendMain(){
            bus.$emit("sendTaskName",this.taskName);
            this.taskName = "";
        }
    }
  }
</script>

<style scoped="scoped">
    .header-input {
        width: 100%;
        height: 35px;
        line-height: 35px;
    }
    .header-input input{
        width: 100%;
        height: 100%;
        border:1px solid #fff;
        border-radius: 3px;
        text-indent: 2em;
    }
</style>
