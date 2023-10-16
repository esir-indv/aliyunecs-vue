import VueRouter from "vue-router";
import Vue from "vue";
import Home from '@/views/HomeView.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  //指定hash属性与组件的对应关系
  routes:[
    //重定向路由
    {
      path:'/',
      redirect:'home'},
    {
      path:'/home',
      component:Home
    },
  ]
})
export default router