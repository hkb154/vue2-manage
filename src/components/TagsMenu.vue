<template>
  <div class="tags-menu" :style="{left: clientX + 'px', top: clientY  + 'px'}">
    <ul>
        <li v-for="(item,index) in tmenu" :key="index" v-show="isShowLi(index)" @click="handleClick(index)">
            <i :class="item.icon"></i>
            {{item.text}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'TagsMenu',
    props: ['clientX', 'clientY', 'clickIndex', 'tagsLength'],
    data() {
        return {
            tmenu: [
                {
                    icon: 'el-icon-refresh-right',
                    text: '刷新页面'
                },
                {
                    icon: 'el-icon-close',
                    text: '关闭当前'
                },
                {
                    icon: 'el-icon-warning-outline',
                    text: '关闭其他'
                },
                {
                    icon: 'el-icon-back',
                    text: '关闭左侧'
                },
                {
                    icon: 'el-icon-right',
                    text: '关闭右侧'
                },
                {
                    icon: 'el-icon-circle-close',
                    text: '全部关闭'
                }
            ]
        }
    },
    methods:{
        handleClick(i){
            this.$emit('fn', i);
        },

        isShowLi(i){
            if(this.tagsLength === 1){
                return i === 0
            }

            if(this.clickIndex === 0){ // 点击的是首页时
                return ![1, 3].includes(i); // i为 1 或 3 时返回false，即隐藏第2项和第4项li
            }
            
            if(this.clickIndex === 1 && this.tagsLength !== 2){ 
                return ![3].includes(i); 
            } else if(this.clickIndex === 1 && this.tagsLength === 2) {
                return ![3, 4].includes(i);
            }

            if(this.clickIndex === this.tagsLength - 1){
                return ![4].includes(i);
            }

            return true;
        }
    }
}
</script>

<style lang="less" scoped>
.tags-menu{
    background-color: #fff;
    box-shadow: 2px 2px 4px #ccc;
    position: absolute;
    border-radius: 8px;
    font-size: 14px;
    ul{
        padding: 10px 0;
        li{
            padding: 10px 15px 10px;
            cursor: pointer;
            &:hover{
                background-color: #ccc;
            }
        }
    }
}
</style>