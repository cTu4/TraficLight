import Vue from 'vue'
import TraficLight from "./components/TraficLight.vue";
import VueRouter from 'vue-router'
import "./assets/scss/variables.scss";
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: "/green",
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
  if ( !(to.params.color === 'green' || to.params.color === 'yellow' || to.params.color === 'red') ) next({ path: '/green' })
  else next()
})
const app = new Vue({
  router
}).$mount('#app')
