<template>
  <div id="app">
      <div class="container">
          <add-user @sendUsers="getUsers"></add-user>
          <show-list @sendChange="getChange" @sendIndex="getIndex" @findName="getItem"  @delAll="delAllItem"  :userArray="userArray"></show-list>
      </div>

  </div>
</template>

<script>
import AddUser from "./components/AddUser.vue"
import ShowList from "./components/ShowList.vue"
export default {
  name: 'app',
  data () {
    return {
        userArray : [
            {
                name : "jack",
                age : 20,
                email : "1702901987@163.com"
            },
            {
                name : "rose",
                age : 30,
                email : "1702901988@163.com"
            },
            {
                name : "张三",
                age : 22,
                email : "1702901989@163.com"
            }
        ],
        num : 0
    }
  },
  components : {
      AddUser,
      ShowList
  },
  methods : {
      getUsers(data){
          this.userArray.push(data)
      },
      getIndex(data){
          this.userArray.splice(data,1)
      },
      delAllItem(data){
          this.userArray = data;
      },
      getItem(data){
          this.num = data;
      }
  }
}
</script>

<style>

</style>
