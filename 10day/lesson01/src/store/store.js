import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    counter : 10,
    num : "100"
  },
  getters : {
    dobuleCounter(state){
      return state.counter * 2;
    },
    dobuleNum(state){
      return state.num;
    }
  },
  mutations : {
    increment(state,payload){

      state.counter+=payload;
      alert(state.counter)
      if(state.counter == 40){
        setTimeout(function(){
          alert("123")
          state.counter = 0;
        },2000)

      }
    },
    decrement(state,payload){

      state.counter-=payload;
    }
  }
});

export default store;
