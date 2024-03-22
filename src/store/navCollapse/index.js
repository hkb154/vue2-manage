export default {
    namespaced: true,
    mutations: {
        changeIsCollapse(state){
            state.isCollapse = !state.isCollapse
        }
    },

    state: {
        isCollapse: false
    }
}