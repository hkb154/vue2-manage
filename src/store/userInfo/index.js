import { GetUserInfoAPI } from '../../request/api'
export default {
    namespaced: true,
    actions: {
        async asyncChangeUserInfo(context, value){
            let GetUserInfoAPIRes =  await GetUserInfoAPI();
            console.log(GetUserInfoAPIRes);
            if(!GetUserInfoAPIRes) return;
            context.commit('changeUserInfo', {
                permissions: GetUserInfoAPIRes.permissions,
                roles: GetUserInfoAPIRes.roles,
                user: GetUserInfoAPIRes.user
            })
        }
    },
    mutations:{
        changeUserInfo(state, value){
            state.userInfo = value
            localStorage.setItem('xj-userInfo', JSON.stringify(state.userInfo));
        }
    },
    state: {
        // 用户信息 要做localStorage 本地存储
        userInfo: JSON.parse(localStorage.getItem('xj-userInfo')) || {
            permissions: null,
            roles: null,
            user: null
        }
    }
}