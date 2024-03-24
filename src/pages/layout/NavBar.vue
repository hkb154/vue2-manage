<template>
  <div class="navbar" :class="{isColl: isCollapse}">
    <h1 class="main-logo">
      <router-link to="/home">
        <img src="../../assets/imgs/Jlogo2.png" alt="Logo" width="32">
      </router-link>
      <span v-show="!isCollapse">小焦后台管理系统</span>
    </h1>
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$route.path"
    >
      <div v-for="item in menuData" :key="item.path">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <svg-icon :icon-file-name="item.icon" style="width: 18px; height: 18px; margin: 0 10 0 4; vertical-align: middle;"></svg-icon>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item :index="option.path" v-for="option in item.children" :key="option.path">{{option.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" v-if="!item.children">
          <!-- <i class="el-icon-menu"></i> -->
          <svg-icon :icon-file-name="item.icon" style="width: 18px; height: 18px; margin: 0 10 0 4; vertical-align: middle;"></svg-icon>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import 'animate.css'
import { mapState } from 'vuex';
import SvgIcon from '@/assets/icons/SvgIcon.vue';
export default {
  components: { SvgIcon },
  name: "NavBar",
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('navCollapse', ['isCollapse']),
    ...mapState('userMenuData', ['menuData'])
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
  transition: all 0.5s;
  .el-menu {
    border: none;
  }
  &.isColl{
    width: 64px;
    &::v-deep i.el-submenu__icon-arrow.el-icon-arrow-right{
      visibility: hidden;
    }
    & .el-submenu__title span{
      visibility: hidden;
    }
  }
  .main-logo{
    padding: 10px 16px;
    position: relative;
    img{
      border-radius: 5px;
      vertical-align: middle;
      cursor: pointer;
    }
    span{
      color: #fff;
      min-width: 130px;
      font-weight: bold;
      position: absolute;
      display: inline-block;
      top: 16px;
      left: 62px;
    }
  }

  .el-submenu .el-menu-item{
    background-color: rgb(38, 52, 69)!important;
  }

  .el-menu-item:hover, ::v-deep .el-submenu__title:hover{
    background-color: #485568 !important;;
  }
}
</style>