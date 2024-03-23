import instance from "./request";

// 获取验证码请求
export const GetCaptchaCodeAPI = () => instance.get('/prod-api/captchaImage');

// 获取登录请求
export const LoginAPI = (params) => instance.post('/prod-api/login', params);

// 获取用户可以访问的路由的API
export const GetUserRoutersAPI = () => instance.get('/prod-api/getRouters');
