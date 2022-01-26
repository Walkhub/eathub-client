const mutations = {
    SET_IS_ADD_MENU (state, toggle) {
        state.isAddMenu = toggle
    },
    PUSH_CART_FOOD (state, payload) {
        state.cartState.push(payload)
    },
    SET_OPEN_MENU_INFO (state, payload) {
        state.openMenuInfo = {
            isOpen: payload.isOpen,
            foodId: payload.foodId
        }
    }
}

export default mutations