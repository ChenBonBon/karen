<template>
    <div class="header">
        <Icon type="ios-menu" custom="icon left"/>
        <router-link to="/" class="router-link">
            <span class="logo">Karen & BonBon</span>
        </router-link>
        <router-link to="/music" class="router-link">
            <Icon type="ios-headset" custom="icon right"/>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: antiquewhite;
    color: goldenrod;
    font-size: 30px;
    z-index: 1;
    .logo {
        font-size: 23px;
    }
    .router-link {
        color: goldenrod;
    }
}
</style>
