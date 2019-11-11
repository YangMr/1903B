<template>
  <div class="index">

    <head-nav></head-nav>
    <left-menu></left-menu>
    <div class="rightContainer">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import HeadNav from "../components/HeadNav.vue"
  import LeftMenu from "../components/LeftMenu.vue"
  export default {
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    },
    components : {
      HeadNav,
      LeftMenu
    }
  }
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.rightContainer {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
