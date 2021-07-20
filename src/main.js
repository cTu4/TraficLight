import Vue from 'vue'
import TraficLight from "./components/TraficLight.vue";
import VueRouter from 'vue-router'
import "./assets/scss/variables.scss";
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";



Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    redirect: "/red",
    component: TraficLight,
    children: [
      { path: '/:color', component: TraficLight },
    ]
  },

]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

router.beforeEach((to, from, next) => {
  if ( !(to.params.color === 'green' || to.params.color === 'yellow' || to.params.color === 'red') ) next({ path: '/red' })
  else next()
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
    }

  }
})



const app = new Vue({
  router,
  store: store
}).$mount('#app');
