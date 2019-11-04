import {COUNTER_INCREMENT,COUNTER_DECREMENT} from "../types"

const state = {
  counter : 10
};

const getters = {
  dobuleCounter(state){
    return state.counter;
  }
};

const mutations = {
  [COUNTER_INCREMENT](state,payload){
    state.counter++;
  },
  [COUNTER_DECREMENT](state,payload){
    state.counter--;
  },
};

const actions = {
  increment(context,data){
    context.commit("increment",data.num);
  },
  decrement(context,data){
    context.commit("decrement",data.num)
  },
  asyncIncrement({commit}){
    alert("111")
    setTimeout(function(){
      commit("increment",10);
    },2000)
  },
  asyncDecrement({commit}){
    alert("222")
    setTimeout(function(){
      commit("decrement",10);
    },2000)
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
