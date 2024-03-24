<template>
  <div class="error-box">
    <p>找不到该页面，正在为您跳转到主页</p>
    <i class="el-icon-loading"></i>
  </div>
</template>

<script>
export default {
    name: '404',
    mounted(){
        setTimeout(() => {
            this.$router.push('/')
        }, 3000)
    }
}
</script>

<style lang="less" scoped>
.error-box{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/imgs/404Back.jpg') no-repeat top;
    background-size: cover;
    p{
        font-size: 36px;
        margin-right: 10px;
        font-weight: bold;
        font-family: STCaiyun;
        // color: #409EFF;
        color: #fff;
        letter-spacing: 2px;
        min-width: 610px;
    }
    i{
        font-size: 36px;
        font-weight: bold;
        color: #fff;
    }
}
</style>