<template>
    <div class="control-bar">
        <Icon type="ios-arrow-dropleft" custom="icon prev" />
        <Icon type="ios-play" custom="icon play-pause" v-if="!getPlayStatus" @click="setPlayStatus" />
        <Icon type="ios-pause" custom="icon play-pause" v-else @click="setPlayStatus" />
        <Icon type="ios-arrow-dropright" custom="icon next" />
        <div class="play-info">
            <span class="play-name"></span>
            <span class="play-curr-time"></span>
            <span class="play-total-time"></span>
        </div>
        <Icon type="ios-menu" custom="icon right"/>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        mounted() {
        },
        methods: {
            ...mapMutations({
                setPlayStatus: 'music/setPlayStatus'
            }),
        },
        computed: {
            ...mapGetters({
                getPlayStatus: 'music/getPlayStatus'
            })
        }
    }
</script>

<style lang="scss" scoped>
.control-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: antiquewhite;
    display: flex;
    align-items: center;
    .prev {
        left: 15px;
    }
    .play-pause {
        left: 60px;
    }
    .next {
        left: 105px;
    }
    .play-info {
        min-width: 140px;
        max-width: 170px;
        height: 30px;
        margin-left: 160px;
        border: 1px solid;
    }
}
</style>
