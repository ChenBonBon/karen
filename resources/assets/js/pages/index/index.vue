<template>
    <div>
        index page
    </div>
</template>

<script>
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
        }
    }
</script>
