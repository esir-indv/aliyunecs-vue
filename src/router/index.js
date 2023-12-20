import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)



const routes = [
//重定向路由
  {
    path:'/',
    redirect:'login',
  },

  {
    path: '/home',
    name: 'Home',
    component: ()=>import('../views/HomeView.vue')
  },
  {
    path:'/login',
    name: '/Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/register',
    name: '/Register',
    component:()=>import('../views/Register.vue')
  }

  ]

const router = new VueRouter({
  //指定hash属性与组件的对应关系
  routes,
})
export default router