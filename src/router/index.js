import VueRouter from 'vue-router';
import Login from '../pages/Login.vue'
import MainLayout from '../pages/layout/MainLayout.vue'

const router = new VueRouter({    
    routes: [
        {
            name: 'mainLayout',
            path: '/',
            component: MainLayout
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('xj-authorization-token');
    // 管理系统常见的两个经典逻辑
    // 1、如果用户访问登录页面，但是已经存在token，则跳转到首页
    if(to.path === '/login' && token){
        next('/');
    }
    // 2、如果用户访问的不是登录页面，但是没有token，则跳转到登录页面
    else if(to.path !== '/login' && !token){
        next('/login');
    }

    else{
        next();
    }
})

export default router;