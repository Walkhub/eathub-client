const state = {
    menuList: []
}

const getters = {};

const actions = {};

const mutations = {
    pushMenuData: (state, payload) => {
        state.menuList.push(payload)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}