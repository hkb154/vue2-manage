<template>
  <div class="header">
    <el-button icon="el-icon-s-fold" v-show="isShow" @click="changeShow"></el-button>
    <el-button icon="el-icon-s-unfold" v-show="!isShow" @click="changeShow"></el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'HeaderView',
    data() {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapState('navCollapse', ['isCollapse'])
    },
    methods: {
      ...mapMutations('navCollapse', {changeIsCollapse: 'changeIsCollapse'}),
      changeShow(){
        this.isShow = !this.isShow;
        this.changeIsCollapse();
      },
      
    }
}
</script>

<style lang="less" scoped>
.header{
  height: 84px;
  box-shadow: 0px 5px 5px #eee;
  button{
    margin: 0;
    width: 50px;
    height: 50px;
    font-size: 28px;
    padding: 12px 12px;
    border: none;
  }
}
</style>