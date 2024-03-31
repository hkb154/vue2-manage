import VueRouter from 'vue-router';
import Login from '../pages/Login.vue'
import MainLayout from '../pages/layout/MainLayout.vue'
import {GetUserRoutersAPI} from '../request/api'
import store from '../store';

const router = new VueRouter({    
    routes: [
        {
            name: 'mainLayout',
            path: '/',
            component: MainLayout,
            redirect: '/home',
            children: [
                {
                    name: 'profile',
                    path: '/profile',
                    component: () => import('../pages/Profile.vue'),
                    meta: {titles: ['个人中心']},
                    children: [
                        {
                            name: 'show',
                            path: '/profile/show',
                            component: () => import('../pages/profile/Show.vue')
                        },
                        {
                            name: 'post',
                            path: '/profile/post',
                            component: () => import('../pages/profile/Post.vue')
                        },
                        {
                            name: 'comment',
                            path: '/profile/comment',
                            component: () => import('../pages/profile/Comment.vue')
                        },
                        {
                            name: 'star',
                            path: '/profile/star',
                            component: () => import('../pages/profile/Star.vue')
                        },
                        {
                            name: 'star',
                            path: '/profile/concern',
                            component: () => import('../pages/profile/Concern.vue')
                        },
                        {
                            name: 'fans',
                            path: '/profile/fans',
                            component: () => import('../pages/profile/Fans.vue')
                        },
                    ]
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: () => import('../components/404.vue')
        }
    ]
})

router.beforeEach(async(to, from, next) => {
    const token = localStorage.getItem('xj-authorization-token');
    // 管理系统常见的两个经典逻辑
    // 1、如果用户访问登录页面，但是已经存在token，则跳转到首页
    if(to.path === '/login' && token){
        next('/');
        return
    }
    // 2、如果用户访问的不是登录页面，但是没有token，则跳转到登录页面
    if(to.path !== '/login' && !token){
        next('/login');
        return
    }

    if(token && store.state.userMenuData.menuData.length === 0){
        let GetUserRoutersAPIRes = await GetUserRoutersAPI();
        // console.log(GetUserRoutersAPIRes);
        if(!GetUserRoutersAPIRes) return;

        let newUserMenuData = [{title: '首页', path: '/home', icon: 'dashboard'}];
        
        let ret = GetUserRoutersAPIRes.data.map(item => {
            if(item.children){
                return {
                    title: item.meta.title,
                    icon: item.meta.icon,
                    path: item.path,
                    children: item.children.map(sitem => {
                        return {
                            title: sitem.meta.title,
                            path: item.path + '/' + sitem.path
                        }
                    })
                }
            } else {
                return {
                    title: item.meta.title,
                    icon: item.meta.icon,
                    path: item.path
                }
            }
            
        })
        newUserMenuData = [...newUserMenuData, ...ret];
        store.commit('userMenuData/ChangeMenuData', newUserMenuData);
        // 以上生成菜单数据

        // 以下生成路由数据
        let newChildrenRoutes = [
            {
                name: 'home',
                path: '/home',
                component: () => import('../pages/Home.vue'),
                meta: {titles: ['首页']}
            },
            // {
            //     name: 'profile',
            //     path: '/profile',
            //     component: () => import('../pages/Profile.vue'),
            //     meta: {titles: ['个人中心']}
            // }
        ];
        GetUserRoutersAPIRes.data.forEach(item => {
            let ret = item.children.map(sitem => {
                return {
                    name: sitem.path,
                    path: item.path + '/' + sitem.path,
                    component: () => import(`../pages${item.path}/${sitem.name}.vue`),
                    meta: {titles: [item.meta.title, sitem.meta.title]}
                }
            })
            newChildrenRoutes = [...newChildrenRoutes, ...ret];
        })
        
        // 把这个生成好的数组添加到mainLayout路由的children里，作为子路由
        // router.addRoute(副路由名称，单个子路由对象)
        newChildrenRoutes.forEach(item => {
            router.addRoute('mainLayout', item);
        });

        // 这个next(to.path)必须写
        // 如果不写，执行外部的next()，此时路由的还是空的，它不确定路由里面有没有这个路径
        // 加了这句后，会重新走一遍路由守卫，此时路由添加完毕，可以检查出用户能不能访问这个路径
        next(to.path);
        return
    }

    next(); //放行
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


export default router;