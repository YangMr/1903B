<template>
    <div class="">
        <div class="form-group">
            <label for="">Quote</label>
            <textarea v-model="name" name="name" class="form-control"></textarea>
        </div>
        <button type="button" @click="sendName" class="btn btn-primary">
            Add Quote
        </button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          name : ""
      }
    },
    created() {
    },
    methods: {
        sendName(){
            this.$emit("sendName",this.name)
            this.name = ""
        }
    }
  }
</script>

<style>
</style>
