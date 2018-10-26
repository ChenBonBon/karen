const music = {
    namespaced: true,
    state: {
        playStatus: false
    },
    mutations:{
        setPlayStatus (state) {
            state.playStatus = !state.playStatus
        }
    },
    getters:{
        getPlayStatus (state) {
            return state.playStatus
        }
    }
}

export default music;