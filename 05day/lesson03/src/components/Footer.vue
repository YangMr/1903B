<template>
    <div class="footer">
        <input @change="changeAll" :checked="len == activeLength" type="checkbox" >
        <p>选中个数： {{activeLength}}/总个数：{{len}}</p>
        <button type="button" @click="delActive" name="button">删除选中的任务</button>
        <button type="button" name="button" @click="delAll">删除全部</button>
    </div>
</template>

<script>
    import bus from "../eventBus"
  export default {
    props : {
        len : Number,
        arr : Array
    },
    data() {
      return {
          activeLength : 0
      }
    },
    created() {

    },
    mounted(){
        bus.$on("sendCount",(data)=>{
            this.activeLength = data
        })

    },
    methods: {
        delAll(){
            this.$emit("delAll",[]);
        },
        changeAll(e){
            this.$emit("changeAllFlag",e.target.checked);
            if(e.target.checked){
                this.activeLength = this.len
            }else{
                this.activeLength = 0;
            }

        },
        delActive(){
            let newArr = this.arr.filter((item,index)=>{
                return item.flag==false
            });

            this.$emit("new",newArr)
        }
    }
  }
</script>

<style scoped="scoped">
    .footer{
        padding: 15px;
        display: flex;
        justify-content: space-around;
    }
</style>
