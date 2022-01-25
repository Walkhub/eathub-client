import Constant from "../../Constant";

const state = {
    menuList: [],
    menuInfo: {}
}

const getters = {};

const actions = {};

const mutations = {
    [Constant.PUSH_MENU_DATA]: ($state, $payload) => {
        $state.menuList.push(...$payload)
    },
    [Constant.PUSH_MENU_ADD]: ($state, $payload) => {
        $state.menuList.push($payload)
    },
    [Constant.SET_MENU_INFO]: ($state, $payload) => {
        $state.menuInfo = $payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}