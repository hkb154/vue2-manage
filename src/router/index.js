import VueRouter from 'vue-router';
import Login from '../pages/Login.vue'

export default new VueRouter({    
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
})
