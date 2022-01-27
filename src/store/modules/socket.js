import Constant from "../../Constant";

const state = {
    menuList: [],
    menuInfo: {},
    reviewData: [],
    myOrderFood: [],
    allOrderFood: {},
    money: {},
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
    },
    [Constant.PUSH_MY_ORDER_FOOD]: ($state, $payload) => {
        $state.myOrderFood.push(...$payload)
    },
    [Constant.SET_ALL_ORDER_FOOD]: ($state, $payload) => {
        $state.allOrderFood = $payload;
    },
    [Constant.SET_MONEY]: ($state, $payload) => {
        $state.money=$payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}