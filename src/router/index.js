import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)



const routes = [
//重定向路由
  {
    path:'/',
    redirect:'home',
  },

  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/HomeView.vue')
  },
  {
    path: '/elementtemp',
    name: 'ElementTemp',
    component: () => import('../views/ElementTemp.vue')
  }
  ]

const router = new VueRouter({
  //指定hash属性与组件的对应关系
  routes,
})
export default router