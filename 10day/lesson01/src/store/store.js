import Vue from "vue"
import Vuex from "vuex"
import counter from "./modules/counter"
import value from "./modules/value"

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    num : "100"

  },
  getters : {
    dobuleNum(state){
      return state.num;
    }
  },
  mutations : {

  },
  actions : {

  },
  modules : {
    counter,
    value
  }
});

export default store;
