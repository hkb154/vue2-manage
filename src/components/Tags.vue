<template>
  <div class="tags">
    <el-tag class="tag" size="medium" :closable="index > 0" 
        v-for="(item, index) in tags"
        :key="item.path"
        :effect="item.path === $route.path ? 'dark' : 'plain'"
        @click="goTo(item.path)"
        @close="close(index)"
        @contextmenu.native.prevent="rightClick($event, index)"
    >
        <i class="circle" v-show="item.path === $route.path"></i>
        {{item.title}}
    </el-tag>
    <TagsMenu
        v-show="isShowMenu"
        :clientX="clientX"
        :clientY="clientY"
        :clickIndex="clickIndex"
        :tagsLength="tags.length"
        @fn="clickMenu"
    >

    </TagsMenu>
  </div>
</template>

<script>
import TagsMenu from './TagsMenu.vue'
export default {
    name: 'Tags',

    data() {
        return {
            tags: [
                {
                    title: '首页',
                    path: '/home'
                }
            ],
            isShowMenu: false,
            clientX: 0,
            clientY: 0,
            clickIndex: 0
        }
    },

    components:{TagsMenu},

    watch: {
        $route: {
            immediate: true,
            handler(value, oldValue){
                if(sessionStorage.getItem('tags')){
                    this.tags = JSON.parse(sessionStorage.getItem('tags'));
                }
                
                // find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
                const bool = this.tags.find(item => {
                    return item.path == value.path
                })
                // console.log(bool);
                // 当tags里的对象不包含目标路径时才添加
                if(!bool){
                    this.tags.push({
                        title: value.meta.titles[value.meta.titles.length - 1],
                        path: value.path,
                    })
                }
            }
        },
        tags: {
            immediate: true,
            handler(value, oldValue){
                sessionStorage.setItem('tags', JSON.stringify(value));
            }
        }
    },

    methods: {
        rightClick(e, i){
            this.clientX = e.clientX;
            this.clientY = e.clientY;
            this.clickIndex = i;

            this.isShowMenu = true;
        },

        closeMenu(){
            this.isShowMenu = false;
        },

        goTo(path){
            this.$router.push(path);
            // console.log(path);
            this.closeMenu();
        },

        close(i){
            // 先暂存要关闭的页面的路径
            let oldPath = this.tags[i].path;

            // 关闭当前项
            this.tags.splice(i, 1); // 在索引 i 处移除 1 个元素

            // console.log(this.tags[i].path);
            // console.log(this.$route.path);

            // 跳转至最后一项(当前页面和要关闭的页面一样时才跳转)
            // if(this.tags[i].path == this.$route.path){ 不能这样写，因为在上面删除了索引i处的元素，此时this.tags[i].path和刚传进来的不一样

            if(oldPath === this.$route.path){
                this.$router.push(this.tags[this.tags.length - 1]);
            }
            
            this.closeMenu();
        },

        clickMenu(i){
            if(i === 0){
                this.$bus.$emit('refresh');
            } else if (i === 1){
                this.close(this.clickIndex);
            } else if (i === 2){
                let tempPath = this.tags[this.clickIndex].path;
                this.tags = this.tags.filter((item, index) => {
                    return index === this.clickIndex || index === 0
                })
                this.goTo(tempPath);
                // if(this.clickIndex === 0){
                //     this.goTo('/home');
                // } else {
                //     this.goTo(this.tags[1].path);
                // }
            } else if (i === 3){
                let tempPath = this.tags[this.clickIndex].path;
                this.tags = this.tags.filter((item, index) => {
                    return index >= this.clickIndex || index === 0;
                })
                this.goTo(tempPath);
            } else if (i === 4){
                let tempPath = this.tags[this.clickIndex].path;
                this.tags = this.tags.filter((item, index) => {
                    return index <= this.clickIndex;
                })
                this.goTo(tempPath);
            } else if (i === 5){
                this.tags = [{title: '首页', path: '/home'}];
                this.goTo('/home');
            }
        }
    },

    mounted(){
        // 给文档添加点击事件
        document.addEventListener('click', this.closeMenu);
    },

    beforeDestroy(){
        document.removeEventListener('click', this.closeMenu);
    }
}
</script>

<style lang="less" scoped>
.tags{
    padding: 4px 0 0 10px;
    .tag{
        margin-right: 5px;
        cursor: pointer;
        .circle{
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 4px;
        }
    }
}
</style>