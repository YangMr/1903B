<template>
    <div class="nav">
        <ul>
            <li class="active">
                <router-link to="/">
                    <img src="../../assets/book.svg" alt="">
                    <span>书架</span>
                </router-link>
            </li>
            <li>
                <router-link to="/category">
                    <img src="../../assets/category.svg" alt="">
                    <span>分类</span>
                </router-link>
            </li>
            <li>
                <router-link to="/rank">
                    <img src="../../assets/rank.svg" alt="">
                    <span>排行</span>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <img src="../../assets/search.svg" alt="">
                    <span>搜索</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          // nav : [
          //     {
          //         icon : "./assets/book.svg",
          //         name : "书架",
          //         path
          //     },
          //     {
          //         icon : "./assets/category.svg",
          //         name : "分类"
          //     },
          //     {
          //         icon : "./assets/rank.svg",
          //         name : "排行"
          //     },
          //     {
          //         icon : "./assets/search.svg",
          //         name : "搜索"
          //     }
          // ]
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped="scoped">
    .nav{
        width: 100%;
        background: #ddd;
        position: fixed;
        bottom:0;
        left:0;
    }
    .nav ul{
        display: flex;
        padding:5px 0;
    }
    .nav ul li{
        width: 25%;
        text-align: center;
    }
    .nav ul li img{
        width: 20px;
        height: 20px;
    }
    .nav ul li span{
        display: block;
    }
    .nav ul li a{
        font-size: 14px;
        text-decoration: none;
    }

</style>
