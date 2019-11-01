<template>
  <div class="content category">
    <section v-for="(item,key,index) in category">
      <p class="categoryType">{{categoryType[key]}}</p>
      <ul>
        <li v-for="(item,index) in item">
          <p>{{item.name}}</p>
          <span>{{item.bookCount}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data() {
      return {
        category : "",
        categoryType:{
          male : "男生",
          female : "女生",
          press : "出版"
        }
      }
    },
    created() {
      axios.get("http://47.94.231.184/cats/lv2/statistics").then((response)=>{
          console.log(response.data)
          this.category = response.data;
      }).catch((error)=>{
        console.log(error)
      })
    },
    methods: {
    }
  }
</script>

<style scoped="scoped">
  .category{
    padding:45px 10px 55px 10px;
  }
  .categoryType{
    border-bottom: 1px solid #ccc;
    padding:10px 0;
  }
  section ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  section ul li{
    width: 33.3%;
    text-align: center;
  }
</style>
