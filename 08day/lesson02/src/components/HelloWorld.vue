<template>
  <div class="hello">
     <form>
         <fieldset>
             <legend>添加商品</legend>
             <div class="form-group">
                 <label for="">商品名称:</label>
                 <input type="text" v-model="products.name">
             </div>
             <div class="form-group">
                 <label for="">商品价格:</label>
                 <input type="text" v-model="products.price">
             </div>
             <div class="form-group">
                 <label for="">商品描述:</label>
                 <input type="text" v-model="products.descr">
             </div>
             <div class="form-group">
                 <label for="">商品数量:</label>
                 <input type="text" v-model="products.number">
             </div>
             <button type="button" @click="addProduct">添加</button>
         </fieldset>
     </form>

     <table>
         <thead>
             <tr>
                 <th>编号</th>
                 <th>商品名称</th>
                 <th>商品价格</th>
                 <th>商品描述</th>
                 <th>商品数量</th>
             </tr>
         </thead>
         <tbody>
            <tr @click="goDetail(item)" v-for="(item,index) in list" :key="index">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.descr}}</td>
                <td>{{item.number}}</td>
            </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
import obj from "../util/utils"
export default {
  name: 'HelloWorld',
  data () {
    return {
       products : {
           name : "",
           price : "",
           descr : "",
           number : ""
       },
       list : [],
       bgcolor : "#fff"
    }
  },
  created(){
      console.log(obj.getLocalStorageData("product"))
      this.list = obj.getLocalStorageData("product");
  },
  methods : {
      addProduct(){
          var arr = [];
          arr.push(this.products);

          var data = obj.getLocalStorageData("product");

          if(data){
            data = obj.getLocalStorageData("product");
            data.push(this.products);
            obj.setLocalStorageData("product",data);
            this.list = data;
          }else{
              obj.setLocalStorageData("product",arr);
          }

          this.products = {
              name : "",
              price : "",
              descr : "",
              number : ""
          }
      },
      goDetail(item){
          this.$router.push({name : "detail",query : {name : item.name} })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table{
    width: 100%;
    border:1px solid #ccc;
    margin-top: 50px;
    border-collapse: collapse;
    border-spacing: 0;
}
table th,table td{
    border:1px solid #ccc;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
