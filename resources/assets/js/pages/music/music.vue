<template>
    <div class="music-container">
        <div class="music-image">
            <img src="https://bonbon.oss-cn-shanghai.aliyuncs.com/background/bg2.jpg" />
        </div>
        <control-bar></control-bar>
    </div>
</template>

<script>
    import ControlBar from '~components/ControlBar.vue'
    import { mapMutations } from 'vuex'
    export default {
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            ...mapMutations({
                setScrollTop: 'scrolls/setScrollTop'
            }),
            handleScroll () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                this.setScrollTop(scrollTop)
            }
        },
        components: {
            ControlBar
        }
    }
</script>

<style lang="scss" scoped>
.music-container {
    display: flex;
    justify-content: center;
    background: lavender;
    padding-top: 50px;
    padding-top: 40px;
    .music-image {
        width: 200px;
        height: 200px;
        margin-top: 50px;
        img {
            width: 100%;
            height: 100%;
            animation:6s linear infinite rotate;
            border: 1px solid #343434;
            border-radius: 100px;
        }
    }
}

@keyframes rotate{
	from{-webkit-transform:rotate(0deg)}
	to{-webkit-transform:rotate(360deg)}
}
</style>
