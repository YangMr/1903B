<template>
    <div class="detail">
        <div class="left">

        </div>
        <div class="right" v-for="(item,index) in pro" :key="index">
            <h2>{{item.name}}</h2>
            <p>价格: {{item.price}}</p>
            <p>{{item.descr}}</p>
            <p><input type="text" v-model="item.number"></p>
        </div>
    </div>
</template>

<script>
    import obj from "../util/utils"
  export default {
    data() {
      return {
        id : this.$route.query.name,
        pro : []
      }
    },
    created() {
        var arr = obj.getLocalStorageData("product");

        this.pro = arr.filter((item,index)=>{
            return item.name == this.id
        });
        console.log(this.pro)
    },
    methods: {
    }
  }
</script>

<style>

</style>
