// 用来存放这个项目所有的验证方法
export function validateUsername(rule, value, callback){
    if(value.length < 3 || value.length > 20){
      callback(new Error('用户名必须在3 - 20位字符之内！'));
    }else{
      callback();
    }
}