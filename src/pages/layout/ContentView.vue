<template>
  <div class="layout-content">
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
.layout-content{
  padding: 20px;
  z-index: -1;
}
</style>