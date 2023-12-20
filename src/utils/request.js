import axios from 'axios'
//创建可一个新的axios对象,定义一个request变量接收
const request = axios.create({
  //后端的接口地址  ip:port
  baseURL: 'http://localhost:9090',
  //请求超时时间，30s内后段未返回数据，前端报错
  timeout: 30000
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密

//interceptors:定义请求参数，chorm标头里面可以看
request.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  // let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
  // config.headers['token'] = 'token'  // 设置请求头
  return config
}, error => {
  console.error('request error: ' + error) // for debug
  return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果

//响应标头，处理返回结果
request.interceptors.response.use(
  response => {
    //封装返回的第一层data
    let res = response.data;
    // 兼容服务端返回的字符串数据，将string解析为JSON对象
    if (typeof res === 'string') {
      res = res ? JSON.parse(res) : res
    }
    return res;
  },
  error => {
    console.error('response error: ' + error) // for debug
    return Promise.reject(error)
  }
)

//导出request对象
export default request