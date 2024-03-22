<template>
  <div class="navbar" :class="{isColl: isCollapse}">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import 'animate.css'
import { mapState } from 'vuex';
export default {
  name: "NavBar",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('navCollapse', ['isCollapse'])
  }
};
</script>

<style lang="less" scoped>
.navbar {
  width: 220px;
  height: 100%;
  position: relative;
  background-color: #304156;
  box-shadow: 5px 0 5px #ccc;
  // transition: all 0.5s;
  .el-menu {
    border: none;
  }
  &.isColl{
    width: 64px;
  }
}
</style>