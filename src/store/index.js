import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
    GSPara: 123,
    ws: new WebSocket("ws://10.0.0.104:7181")

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
    console.log("成功连接到ws://10.0.0.104:7181");
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
})