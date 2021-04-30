import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
    GSPara: 123,
    ws: new WebSocket("ws://124.16.138.10:23896/files")

}

const mutations = {
    saveAdminInfo(state, adminInfo) {
        state.adminInfo = adminInfo;
    }
}

const actions = {
    async getAdminData({ commit }) {
        try {
            const res = await getAdminInfo()
            if (res.status == 1) {
                commit('saveAdminInfo', res.data);
            } else {
                throw new Error(res.type)
            }
        } catch (err) {
            // console.log(err.message)
        }
    }
}
state.ws.onopen = function() {
    console.log("ws://124.16.138.10:23896/files");
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})