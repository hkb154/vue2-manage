import instance from "./request";

// 获取验证码请求
export const GetCaptchaCodeAPI = () => instance.get('/prod-api/captchaImage');

// 获取登录请求
export const LoginAPI = (params) => instance.post('/prod-api/login', params);

// 获取用户可以访问的路由的API
export const GetUserRoutersAPI = () => instance.get('/prod-api/getRouters');

// 获取用户信息
export const GetUserInfoAPI = () => instance.get('/prod-api/getInfo');

// 客户管理-客户列表展示
export const GetCustomerListAPI = (params) => instance.get('/prod-api/customer', {params});

// 导出表格接口
export const CustomerExportAPI = (params, configs) => instance.post('/prod-api/customer/export', params, configs);

// 审核流程定义的接口
export const BpmnInfoApi = (params, configs) => instance.post('/prod-api/business/bpmnInfo', params, configs);
