<template>
    <div class="home">
        <h1>我是首页</h1>

        <hr>
        <!-- 动态路由传参 -->
        <button @click="goAbout" type="button" name="button">
            跳转到关于页面
        </button>
        <!-- query的方式传参 -->
        <button @click="goList" type="button" name="button">
            跳转到列表页面
        </button>
        <!-- params的方式传参-->
        <button @click="goDetail" type="button" name="button">
            跳转到详情页面
        </button>
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
        goAbout(){
            this.$router.push({
                path : "/about/123"
            })
        },
        goList(){
            this.$router.push({
                name : "list",
                query : {
                    name : "jack",
                    age : 20
                }
            })
        },
        goDetail(){
            this.$router.push({
                name : "detail",
                params : {
                    id : 1,
                    name : "rose"
                }
            })
        }
    }
  }
</script>

<style>
</style>
