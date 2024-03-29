<template>
  <div class="content">
     <el-descriptions class="margin-top" title="个人简介" :column="2" :size="size" border>
        <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
        </template>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-picture-outline-round"></i>
            头像
        </template>
        <img src="../../assets/imgs/avatar2.png" alt="您的头像">
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-postcard"></i>
            账户名
        </template>
        xjkk154
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-user"></i>
            昵称
        </template>
        小焦
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-view"></i>
            年龄
        </template>
        18
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-connection"></i>
            性别
        </template>
        <el-tag size="small">男</el-tag>
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-message"></i>
            邮箱
        </template>
        10086@qq.com
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            手机号
        </template>
        18100000000
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-ice-cream-round"></i>
            兴趣爱好
        </template>
        摄影/盲盒
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-medal"></i>
            职业
        </template>
        学生
        </el-descriptions-item>
        
        
        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-school"></i>
            学校/公司
        </template>
        小焦大学
        </el-descriptions-item>


        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-location-outline"></i>
            居住地
        </template>
        广州市
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-office-building"></i>
            联系地址
        </template>
        广东省广州市海珠区小焦路 1188 号
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-edit"></i>
            个性签名
        </template>
        不知名退堂鼓选手
        </el-descriptions-item>

        <el-descriptions-item>
        <template slot="label">
            <i class="el-icon-date"></i>
            注册时间
        </template>
        2023-10-14
        </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
    name: 'Content',
    data() {
        return {
            sex: false,
        }
    },
}
</script>

<style lang="less" scoped>
.content{
    width: 96%;
    height: 96%;
    position: relative;
    top: 2%;
    left: 2%;
    img{
        width: 60px;
        border-radius: 10px;
    }
}

::v-deep th{
    vertical-align: middle;
}

::v-deep td{
    vertical-align: middle;
}
</style>