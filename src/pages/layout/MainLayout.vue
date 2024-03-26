<template>
  <div class="layout">
    <NavBar></NavBar>
    <div class="layout-right" :class="{isColl: isCollapse}">
      <HeaderView></HeaderView>
      <ContentView></ContentView>
        <!-- <div class="header-box">
          <HeaderView></HeaderView>
        </div> 
        <div class="content-box">
          <ContentView></ContentView>
        </div> -->
    </div>
  </div>
</template>

<script>
import ContentView from './ContentView.vue'
import HeaderView from './HeaderView.vue'
import NavBar from './NavBar.vue'
import { mapState } from 'vuex';

export default {
    name: 'MainLayout',
    components: {NavBar, HeaderView, ContentView},
    computed: {
      ...mapState('navCollapse', ['isCollapse'])
    }
}
</script>

<style lang="less" scoped>
.layout{
  width: 100%;
  height: 100%;
  display: flex;
  .layout-right{
    flex: 1;
    max-width: calc(100vw - 220px);

    // 解决出现滚动条挤压容器的宽度的问题
    margin-right: calc(100% - 100vw); //100%是除了滚动条的可用宽度，100vw是window的宽度（包括滚动条） 没有滚动条时为0

    transition: all 0.5s;
    &.isColl{
      max-width: calc(100vw - 64px);
    }
    .header-box{
      height: 84px;
      position: sticky;
      top: 0px;
      z-index: 1;
    }
    .content-box{
      z-index: -1;
    }
  }
}
</style>