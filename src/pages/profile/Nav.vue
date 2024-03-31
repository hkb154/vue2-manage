<template>
  <div class="nav-box">
    <h2>个人中心</h2>
    <el-menu
      :router="true"
      :default-active="this.$route.path"
      class="el-menu-vertical-demo"
      >
      <el-menu-item index="/profile/show">
      <i class="el-icon-user"></i>
      <span slot="title">个人简介</span>
      </el-menu-item>
      <el-menu-item index="/profile/post">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">我的发帖</span>
      </el-menu-item>
      <el-menu-item index="/profile/comment">
      <i class="el-icon-chat-dot-square"></i>
      <span slot="title">我的评论</span>
      </el-menu-item>
      <el-menu-item index="/profile/star">
      <i class="el-icon-star-off"></i>
      <span slot="title">我的收藏</span>
      </el-menu-item>
      <el-menu-item index="/profile/concern">
      <i class="el-icon-mobile-phone"></i>
      <span slot="title">我的关注</span>
      </el-menu-item>
      <el-menu-item index="/profile/fans">
      <i class="el-icon-place"></i>
      <span slot="title">我的粉丝</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name: 'Nav'
}
</script>

<style lang="less" scoped>
h2{
    height: 50px;
    // text-align: center;
    padding-left: 24px;
    line-height: 50px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
}
</style>