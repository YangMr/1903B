<template>
    <div class="list">
        <app-quote @click.native="del(index)" v-for="(item,index) in quotes" :key="index">
            <p class="item">{{item}}</p>
        </app-quote>
    </div>
</template>

<script>
  import Quote from "./Quote.vue";
  export default {
    props : ["quotes"],
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
        del(index){
            this.$emit("sendIndex",index)
        }
    },
    components:{
        "appQuote" : Quote
    }
  }
</script>

<style>
    .list{
        display: flex;
    }
</style>
