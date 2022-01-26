import Constant from "../../Constant";

const state = {
    menuList: [],
    menuInfo: {},
    reviewData: []
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
    },
    [Constant.PUSH_REVIEW_DATA]: ($state, $payload) => {
        $state.reviewData.push(...$payload)
    },
    [Constant.PUSH_REVIEW_ADD]: ($state, $payload) => {
        $state.reviewData.push($payload)
    },
    [Constant.SET_REVIEW_SCORE]: ($state, $payload) => {
        $state.menuInfo = {
            ...$state.menuInfo,
            totalAmount: $payload.totalAmount,
            rank: $payload.rank,
            foodScore: $payload.reviewAverage
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}