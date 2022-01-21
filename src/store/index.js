import Vuex from 'vuex'
import state from './state'
import mutations from './mutations';
import actions from './actions';
import socket from './modules/socket';

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    socket
})

export default store;