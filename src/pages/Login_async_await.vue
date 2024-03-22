<template>
  <div class="login-page">
    <div class="login-box">
      <h1>小焦后台管理系统</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="'密\xa0\xa0\xa0码'" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="captchaCode">
          <div class="captcha-box">
            <el-input v-model.number="ruleForm.captchaCode"></el-input>
            <img @click="getCaptcha" height=40 :src="captchaSrc" alt="验证码">
          </div>
        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {validateUsername} from '../utils/validate';
import {GetCaptchaCodeAPI, LoginAPI} from '../request/api';

export default {
    name: 'Login',
    data() {
      return {
        ruleForm: {
          username: 'qdtest1',
          password: '123456',
          captchaCode: '888888'
        },
        rules: {
          username: [
            {
              required: true, // 必填项
              message: '用户名不能为空！', // 提示语
              trigger: 'blur'
            },
            { 
              validator: validateUsername, trigger: 'blur' 
            }
          ],
          password: [
            {
              required: true, // 必填项
              message: '密码不能为空！',
              trigger: 'blur'
            },
            { 
              validator: this.validatePassword, trigger: 'blur' 
            }
          ],
          captchaCode: [
            {
              required: true, // 必填项
              message: '验证码不能为空！',
              trigger: 'blur'
            }
          ]
        },
        captchaSrc:''
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            // 校验通过，执行这部分代码
            // 发起登录请求
            let response = await LoginAPI({
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.captchaCode,
              uuid: localStorage.getItem('xj-captcha-uuid')
            })

            if(response.code == 200){
              console.log(response);
            }else{
              this.$message({
                message: response.msg,
                type: 'error',
                showClose: true,
                center: true
              });
            }
          } else {
            // 校验未通过，执行这部分代码
            this.$message({
              message: '请输入正确的信息后再登录',
              type: 'warning',
              showClose: true,
              center: true
            });
            return false;
          }
        });
      },
      async getCaptcha(){
        let response = await GetCaptchaCodeAPI() // 浏览器接受响应后再执行以下代码
        
        // console.log('33333');
        if(response.code == 200){
          // 展示验证码图片
          this.captchaSrc = 'data:image/gif;base64,' + response.img;

          // 保存uuid，给登录时作为参数传递给后端
          localStorage.setItem('xj-captcha-uuid', response.uuid)
        }else{
          this.$message({
          message: response.message,
          type: 'error',
          showClose: true,
          center: true
        });
        }    
      }
    },
    mounted(){
      this.getCaptcha();
    }
}
</script>

<style lang="less" scoped>
.login-page{
  background: url('../assets/imgs/loginback.png') no-repeat center top;
  width: 100%;
  height: 100%;
  position: relative;
  .login-box{
    width: 400px;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    padding-right: 40px;
    h1{
      text-align: center;
      margin-bottom: 20px;
      padding-left: 40px;
      font-size: 20px;
      color: #409EFF;
      font-weight: bold;
      letter-spacing: 2px;
      font-family: STCaiyun;
    }
    .captcha-box{
      height: 40px;
      display: flex;
      img{
        margin-left: 10px;
      }
    }
    .login-btn{
      width: 100%;
      // width: 240px;
    }

    // 样式覆盖的写法  ::v-deep
    ::v-deep #login-btn-box .el-form-item__content{
      margin-left: 40px!important;
    }
  }
}

</style>