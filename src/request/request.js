import router from "../router";
import axios from "axios";
import { Message } from "element-ui";

const instance = axios.create({
    baseURL: 'http://tech.wolfcode.cn:23683',
    timeout: 10000
})

// 请求拦截器 在浏览器发送请求前执行  浏览器 (拦截) ——请求——> 目标接口
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('xj-authorization-token');
        if(token && !config.url.endsWith('/login') && !config.url.endsWith('/captchaImage')){
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // console.log('11111');
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 响应拦截器 在浏览器接受响应前执行 浏览器 (拦截) <——响应—— 目标接口
instance.interceptors.response.use(
    response => {
        let res_data = response.data;
        if(res_data.code && res_data.code != 200){
            Message.error({message: res_data.msg,showClose: true,center: true} || '网络请求错误');
            // 401一般为token过期或没有带
            if(res_data.code == 401){
                localStorage.removeItem('xj-authorization-token');
                router.push('/login')
            }

            // 这里return不是结束函数，实际上是把return值传递给组件中的response
            return false;
        }
        // console.log('22222');
        return res_data;
    },
    error => {
        return Promise.reject(error);
    }
)

export default instance;