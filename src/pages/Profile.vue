<template>
  <div class="container">
    <div class="header-box">
      <HeaderBox></HeaderBox>
    </div>
    <div class="body-box">
      <div class="nav-box">
        <Nav></Nav>
      </div>
      <div class="content-box">
        <Content></Content>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBox from './profile/HeaderBox.vue'
import Nav from './profile/Nav.vue'
import Content from './profile/Content.vue'
export default {
  name: 'Profile',
  components: {HeaderBox, Nav, Content}
}
</script>

<style lang="less" scoped>
.container{
  width: 90%;
  height: 100%;
  margin: auto;
  .header-box{
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .body-box{
    height: calc(100% - 110px);
    display: flex;
    .nav-box{
      width: 200px;
      background-color: #fff;
      height: 100%;
    }
    .content-box{
      flex: 1;
      margin-left: 10px;
      background-color: #fff;
    }
  }
}
</style>