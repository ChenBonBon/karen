const scroll = {
    state: {
        scrollTop: 0
    },
    mutations:{
        setScrollTop (state, scrollTop) {
            state.scrollTop = scrollTop
        }
    },
    getters:{
        getScrollTop (state) {
            return state.scrollTop
        }
    }
}

export default scroll;