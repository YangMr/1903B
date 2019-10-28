<template>
    <div class="main-list">
        <ul>
            <li v-for="(item,index) in arrList">
                <input @change="changeFlag(index)" :checked="item.flag" type="checkbox" >
                <strong>{{item.task}}</strong>
                <button @click="del(index)" type="button" name="button">删除</button>
            </li>

        </ul>
    </div>
</template>

<script>
    import bus from "../eventBus"
  export default {
    props : {
        arrList : Array
    },
    data() {
      return {
          count : 0
      }
    },
    created() {

    },
    mounted(){
        bus.$on("sendTaskName",(data)=>{
            this.arrList.push({
                id : this.arrList[this.arrList.length-1].id++,
                task : data,
                flag : false
            })
        })
    },

    methods: {
        del(index){
            this.arrList.splice(index,1);
        },
        changeFlag(index){
            this.arrList[index].flag = !this.arrList[index].flag;

            var result = this.arrList.filter((item,index)=>{
                return item.flag;
            });

            this.count = result.length;

            bus.$emit("sendCount",this.count)
        }
    }
  }
</script>

<style scoped="scoped">
    .main-list{
        border: 1px solid #fff;
        border-radius: 3px;
        margin-top: 15px;
        padding: 10px;
    }
    .main-list ul{
        list-style: none;

    }
    .main-list ul li{
        height: 33px;
        line-height: 33px;
        border-bottom:1px solid #fff;
        color: #f60;
    }
    .main-list ul li:last-child{
        border-bottom: none;
    }
    .main-list ul li button{
        width: 80px;
        height: 20px;
        cursor: pointer;
        float: right;
        position: relative;
        top: 8px;
        right: 20px;
    }


</style>
