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
        <el-form-item label="验证码" prop="checkChaCode">
          <el-input v-model.number="ruleForm.checkChaCode"></el-input>
        </el-form-item>
        <el-form-item id="login-btn-box">
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
      return {
        ruleForm: {
          username: '',
          password: '',
          checkChaCode: ''
        },
        rules: {
          username: [
            {
              required: true, // 必填项
              message: '用户名不能为空！', // 提示语
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true, // 必填项
              message: '密码不能为空！',
              trigger: 'blur'
            }
          ],
          checkChaCode: [
            {
              required: true, // 必填项
              message: '验证码不能为空！',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      submitForm(){

      }
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
    background-color: #fff;
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