import axios from 'axios'
import router  from '../../router'


export default function(config){
    const instance = axios.create({
        baseURL: '/api',
      });
     // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log(config)
      if(config.url == '/login') return config;
      config.headers.Authorization = window.sessionStorage.getItem('token')
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });
    



    return instance(config)

}