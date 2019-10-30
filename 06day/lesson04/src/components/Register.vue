<template>
    <div class="register">
        <h1>我是注册页面</h1>

        <form>
            <fieldset>
                <legend>用户注册信息表</legend>
                <p>
                    <label for="">用户名:</label>
                    <input type="text" v-model="users.user" placeholder="请输入用户名">
                </p>
                <p>
                    <label for="">密 &nbsp;&nbsp;码:</label>
                    <input type="password" v-model="users.pass" placeholder="请输入密码">
                </p>
                <p>
                    <label for="">性别:</label>
                    <input type="radio" v-model="users.sex"  value="男">男
                    <input type="radio" v-model="users.sex"  value="女">女
                </p>
                <p>
                    <label for="">爱好:</label>
                    <input type="checkbox" v-model="users.check" value="唱歌">唱歌
                    <input type="checkbox" v-model="users.check" value="吃饭">吃饭
                    <input type="checkbox" v-model="users.check" value="打游戏">打游戏
                    <input type="checkbox" v-model="users.check" value="看电影">看电影
                    <input type="checkbox" v-model="users.check" value="抽烟">抽烟
                    <input type="checkbox" v-model="users.check" value="喝酒">喝酒
                </p>
                <p>
                    <label for="">住址：</label>
                    <select v-model="users.sel.city" class="" name="">
                        <option  value="北京">北京</option>
                        <option  value="天津">天津</option>
                        <option  value="上海">上海</option>
                        <option  value="广州">广州</option>
                        <option  value="江苏">江苏</option>
                    </select>
                    <select v-model="users.sel.s" class="" name="">
                        <option>海淀</option>
                        <option>静海</option>
                        <option>普陀</option>
                        <option>珠海</option>
                        <option>苏州</option>
                    </select>
                    <select v-model="users.sel.x" class="" name="">
                        <option>三里屯</option>
                        <option>外滩</option>
                        <option>吉利大学</option>
                        <option>积云教育</option>
                        <option>1903B</option>
                    </select>
                </p>
                <p>
                    <label for="">个人留言:</label>
                    <textarea v-model="users.member" name="name" rows="8" cols="80"></textarea>
                </p>
                <p>
                    <button @click="getUserInput" type="button" name="button">
                        提交
                    </button>
                    <button type="reset" name="button">重置</button>
                </p>
            </fieldset>
        </form>


    </div>
</template>

<script>
    import axios from "axios"
  export default {
    data() {
      return {
          users : {
              user : "",
              pass : "",
              sex : "男",
              check : [],
              sel : {
                  city : "北京",
                  s : "海淀",
                  x : "外滩"
              },
              member : ""
          }
      }
    },
    created() {
    },
    methods: {
        getUserInput(){

            console.log(this.users)
        }
    }
  }
</script>

<style scoped="scoped">
    .register{
        width: 500px;
        margin: 20px auto;
    }
</style>
