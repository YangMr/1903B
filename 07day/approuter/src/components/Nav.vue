<template>
    <div class="nav">
        <ul>
            <!-- <li><router-link to="/"  exact>首页</router-link></li>
            <li><router-link to="/list" >列表</router-link></li>
            <li><router-link to="/about" >关于</router-link></li>
            <li><router-link to="/detail" >详情</router-link></li> -->
            <!-- <router-link to="/" tag="li" exact><a>首页</a></router-link>
            <router-link to="/list" tag="li"><a>列表</a></router-link>
            <router-link to="/about" tag="li"><a>关于</a></router-link>
            <router-link to="/detail" tag="li"><a>详情</a></router-link> -->
            <router-link :to="{name : 'home'}" tag="li" exact><a>首页</a></router-link>
            <router-link :to="{name : 'list'}" tag="li"><a>列表</a></router-link>
            <router-link :to="{name : 'about'}" tag="li"><a>关于</a></router-link>
            <router-link :to="{name : 'detail'}" tag="li"><a>详情</a></router-link>
        </ul>
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
    }
  }
</script>

<style>

    .router-link-active{
        padding: 20px;
        border-radius: 3px;
        background: #ccc;
    }
    .router-link-exact-active{
        padding: 20px;
        border-radius: 3px;
        background: #ccc;
    }
</style>
