<template>
  <div class="fillcontain">
    <button type="button" @click="add">添加</button>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>创建时间</th>
          <th>收支类型</th>
          <th>收支描述</th>
          <th>收支</th>
          <th>支出</th>
          <th>账户现金</th>
          <th>备注</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="tableData.length > 0" v-for="(item,index) in tableData" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.date}}</td>
          <td>{{item.type}}</td>
          <td>{{item.describe}}</td>
          <td>{{item.income}}</td>
          <td>{{item.expend}}</td>
          <td>{{item.cash}}</td>
          <td>{{item.remark}}</td>
          <td>
            <button type="button" >编辑</button>
            <button type="button" @click="del(index,item)">删除</button>
          </td>
        </tr>
      </tbody>

    </table>





    <el-dialog title="添加金额" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="收支类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" ></el-input>
        </el-form-item>
        <el-form-item label="收支描述" :label-width="formLabelWidth">
          <el-input v-model="form.describe" ></el-input>
        </el-form-item>
        <el-form-item label="收入" :label-width="formLabelWidth">
          <el-input v-model="form.income" ></el-input>
        </el-form-item>
        <el-form-item label="支出" :label-width="formLabelWidth">
          <el-input v-model="form.expend" ></el-input>
        </el-form-item>
        <el-form-item label="现金" :label-width="formLabelWidth">
          <el-input v-model="form.cash" ></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.remark" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData : [],
        dialogFormVisible : false,
        form : {},
        formLabelWidth : "80"
      }
    },
    created() {
      this.reload();

    },
    methods: {
      del(index,item){
         this.$axios.get(`/api/profiles/delete/${item._id}`).then(response=>{
           console.log(response);
           this.reload()
         }).catch(error=>{
           console.log(error);
         })
      },
      add(){
        this.dialogFormVisible = true;
      },
      submit(){
        this.dialogFormVisible = false;
        this.$axios.post("/api/profiles/add",this.form).then(response=>{
          if(response.status == 200){
            this.reload()
          };
        }).catch(error=>{
          console.log(error);
        })
      },
      reload(){
        this.$axios.get("/api/profiles").then(response=>{
          this.tableData = response.data;
          console.log(response)
        }).catch(error=>{
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped>
.fillcontain {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}

table{
  border:1px solid #ccc;
  width: 100%;
  text-align: center;
}
table th, table td{
  border:1px solid #ccc;
  padding:10px;
}

.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
