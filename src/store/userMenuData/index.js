export default {
    namespaced: true,
    mutations: {
        ChangeMenuData(state, payload){
            state.menuData = payload;
        }
    },

    state: {
        menuData: []
    }
}