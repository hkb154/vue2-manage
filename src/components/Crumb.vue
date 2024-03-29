<template>
  <div class=".crumb">
    <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="(item, index) in titles" :key="index">{{item}}</el-breadcrumb-item>
</el-breadcrumb>
  </div>
</template>

<script>
export default {
    name: 'Crumb',
    data(){
        return {
            // titles的值和当前所在路由相关
            // 当前路由一发生变化，titles的值就变化，所以要监听路由的变化
            titles: []
        }
    },

    watch: {
        $route: {
            immediate: true, // 刷新页面就立即监听
            handler(value, oldValue){
                // 当前路由：this.$route,  里面可以有元信息meta (meta存放当前路由相关的数据)
                this.titles = this.$route.meta.titles
            }
        }
    }
}
</script>

<style lang="less" scoped>
.crumb, .el-breadcrumb{
    line-height: 50px;
    margin-left: 10px;
}

</style>