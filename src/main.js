import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
// 导入并注册 element-ui 组件
import './element-ui'
//导入图标组件
import "font-awesome/css/font-awesome.min.css"
//导入axios库
import axios from 'axios'
// 配置请求根路径
axios.defaults.baseURL = "http://localhost:8087"
//挂载baseURL $http可自定义 新增Vue属性
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')