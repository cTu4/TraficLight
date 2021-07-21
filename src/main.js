import Vue from 'vue'
import TraficLight from "./components/TraficLight.vue";
import RouteTrafic from "./components/RouteTrafic.vue";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";



Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    component: RouteTrafic,
    children: [
      { path: '/:color', component: TraficLight },
    ]
  },

]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})




const store = new Vuex.Store({
  state () {
    return {
      current: {
        color: '',
        timer: 0
      }
    }
  },
  plugins: [createPersistedState()],
  mutations:{
    setCurrent(state,data){
      state.current.color = data.color;
      state.current.timer = data.timer;
    },
    TicTime(state){
      state.current.timer--;
    },
    SetTime(state,data){
      state.current.timer = data.timer;
    }

  }
})



const app = new Vue({
  router,
  store: store
}).$mount('#app');
