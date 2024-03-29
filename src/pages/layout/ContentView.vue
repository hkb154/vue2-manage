<template>
  <div class="layout-content" :class="[{hasBg: $route.path == '/home'}, {hasBg2: $route.path.includes('/profile')}]" >
    <transition 
      name="animate__animated animate__bounce" 
      enter-active-class="animate__flipInX"
      leave-active-class="animate__flipOutX"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'ContentView',
    methods: {
      reload() {
        this.$forceUpdate()
      }
    },
    mounted(){
      this.$bus.$on('refresh', this.reload);
    },
    beforeDestroy() {
      this.$bus.$off('refresh');
    }
}
</script>

<style lang="less" scoped>
.hasBg{
  background: url('../../assets/imgs/bg.png') no-repeat center;
  background-size: cover;
}

.hasBg2{
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);;
}

.layout-content{
  padding: 20px;
  // calc运算符两边要加空格，否则运算无效
  height: calc(100% - 124px);
  z-index: -1;
}
</style>