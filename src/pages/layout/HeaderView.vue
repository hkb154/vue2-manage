<template>
  <div class="header">
    <div class="header-top">
      <div class="fl">
        <el-button icon="el-icon-s-fold" v-show="isShow" @click="changeShow"></el-button>
        <el-button icon="el-icon-s-unfold" v-show="!isShow" @click="changeShow"></el-button>
      </div>
      <div class="fl">
        <Crumb></Crumb>
      </div>
      <div class="fr">
        <el-dropdown @command="handleCommand">
          <div class="avatar-box">
            <!-- <img :src="IMG_BASEURL + (userInfo.user.avatar || '/profile/avatar/2022/10/10/blob_20221010200353A001.jpeg')" alt=""> -->
            <img src="../../assets/imgs/avatar2.png" alt="您的头像"> <!-- 静态 -->
            <i class="el-icon-caret-bottom"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="profile">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="header-bottom">
      <Tags></Tags>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Tags from '../../components/Tags.vue'
import Crumb from '../../components/Crumb.vue'
import {IMG_BASEURL} from '../../utils/baseurl'

export default {
    name: 'HeaderView',
    components: {Crumb, Tags},
    data() {
      return {
        isShow: true,
        IMG_BASEURL
      }
    },
    computed: {
      ...mapState('navCollapse', ['isCollapse']),
      ...mapState('userInfo', ['userInfo'])
    },
    methods: {
      ...mapMutations('navCollapse', {changeIsCollapse: 'changeIsCollapse'}),
      changeShow(){
        this.isShow = !this.isShow;
        this.changeIsCollapse();
      },
      
      handleCommand(command){
        if(command === 'logout'){
          localStorage.removeItem('xj-authorization-token');
          localStorage.removeItem('xj-userInfo');
          this.$router.push('/login');
        } else if (command === 'profile'){
          this.$router.push('/profile')
        }
      }
    }
}
</script>

<style lang="less" scoped>
.header{
  height: 84px;
  box-shadow: 0px 5px 5px #eee;
  background-color: #fff;
  position: sticky;
  top: 0px;
  .header-top{
    height: 50px;
    box-shadow: 0px 3px 3px #eee;
    button{
      margin: 0;
      width: 50px;
      height: 50px;
      font-size: 28px;
      padding: 12px 12px;
      border: none;
    }
    .fl{
      float: left;
    }
    .fr{
      float: right;
      .avatar-box{
        padding: 5px 40px 0 0;
        img{
          height: 40px;
          border-radius: 5px;
        }
        img, i{
          cursor: pointer;
        }
      }
    }
  }
}
</style>