import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const types = {
  SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
  SET_USER: 'SET_USER' // 用户信息
}



const state = {
  isAutnenticated: false,  // 存储的是token的状态： 有效 true或者无效 false
  user: {}    //存储的用户信息
};

const getters = {
  isAutnenticated(state){
    return state.isAutnenticated;
  },
  user(state){
    return state.user;
  }
};

const mutations = {
  [types.SET_IS_AUTNENTIATED](state,payload){
    state.isAutnenticated = payload;
  },
  [types.SET_USER](state,payload){
    state.user = payload;
  }
};

const actions = {
  setIsAutnenticated({commit},payload){
    commit(types.SET_IS_AUTNENTIATED,payload)
  },
  setUser({commit},payload){
    commit(types.SET_USER,payload);
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
