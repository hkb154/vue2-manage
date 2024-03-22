import axios from "axios";

const instance = axios.create({
    baseURL: 'http://tech.wolfcode.cn:23683',
    timeout: 10000
})

// 请求拦截器 在浏览器发送请求前执行  浏览器 (拦截) ——请求——> 目标接口
instance.interceptors.request.use(
    config => {
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
        // console.log('22222');
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
)

export default instance;