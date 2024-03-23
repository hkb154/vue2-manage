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
    name: 'ContentView'
}
</script>

<style lang="less" scoped>
.layout-content{
  padding: 20px;
}
</style>