import instance from "./request";

export const GetCaptchaCodeAPI = () => instance.get('/prod-api/captchaImage')

export const LoginAPI = (params) => instance.post('/prod-api/login', params)
