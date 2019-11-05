import Vue from "vue"

export default {
  //获取所有分类
  getCategory(){
    return Vue.http.get("/cats/lv2/statistics");
  },
  //获取排行类型
  getRankType(){
    return Vue.http.get("/ranking/gender")
  }
}
