import Constant from "../../Constant";

const state = {
    menuList: []
}

const getters = {};

const actions = {};

const mutations = {
    [Constant.PUSH_MENU_DATA]: ($state, $payload) => {
        $state.menuList.push(...$payload)
    },
    [Constant.PUSH_MENU_ADD]: ($state, $payload) => {
        $state.menuList.push($payload)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}