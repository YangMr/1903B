<template>
  <div class="footer">
    <ul>
      <li @click="go(index)" :class="{active : navIndex == index}" v-for="(item,index) in nav" :key="index">
        <router-link :to="{ path : item.path }">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </router-link>

      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav : [
          {
            icon : "../../assets/book.svg",
            name : "书架",
            path : "/"
          },
          {
            icon : "../../assets/category.svg",
            name : "分类",
            path : "/category"
          },
          {
            icon : "../../assets/rank.svg",
            name : "排行",
            path : "/rank"
          },
          {
            icon : "../../assets/search.svg",
            name : "搜索",
            path : "/search"
          }
        ],
        navIndex : 0
      }
    },
    created() {
    },
    methods: {
      go(index){
        // this.$router.push(this.nav[index].path);
        this.navIndex = index;
        this.$emit("getTitle",this.nav[index].name)
      }
    }
  }
</script>

<style>
  .footer{
    width: 100%;
    position: fixed;
    bottom:0;
    left: 0;
    background: #ddd;

  }
  .footer ul{
    display: flex;
    list-style-type: none;
  }
  .footer ul li{
    width: 25%;
    text-align: center;

  }
  .footer ul li a{
    padding: 5px 0;
    text-decoration: none;
    display: block;
  }
  .footer ul li img{
    width: 20px;
    height: 20px;
  }
  .footer ul li span{
    display: block;
    font-size:14px;
  }
  .footer ul li.active{
    background: #eee;
  }
</style>
