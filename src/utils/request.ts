//1.利用axios请求,响应拦截器功能
//2.请求拦截器,一般可以在请求头中携带公共的参数:token
//3.响应拦截器,可以简化服务器返回的数据,处理http网络错误
import axios from 'axios';

//利用axios.create方法创建一个axios实例:可以设置基础路径,超时的时间设置

const request = axios.create({
    baseURL: '/api', //请求的基础路径设置
    timeout: 5000, //超时的时间设置
})

//请求拦截器
request.interceptors.request.use(config => {
    //config: 请求拦截器回调器回调注入的对象(配置),配置对象的身上最重要的一件事情headers属性
    //可以通过请求头携带公共参数-token
    return config;
})

//响应拦截器
request.interceptors.response.use(response => {
    //响应拦截器成功的回调, 一般会进行简化数据

    return response.data;
}, error => {
    //处理http网络错误

    return Promise.reject(new Error(error.message))
})

export default request;