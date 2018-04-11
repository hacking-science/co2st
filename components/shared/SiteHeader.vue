<template>
    <nav class="navbar">
        <div class="navbar-container w-85">
            <div class="navbar__left">
                <div class="navbar__home" v-if="!showMobileNav">
                    <nuxt-link :to='"/"'>
                        <h1>C0<sub>2</sub>ST</h1>
                    </nuxt-link>
                </div>
            </div>
            <div class="navbar__right">
                <div class="navbar__menu">
                    <div @click="toggleMobileNav">
                        <div class="menu__button-open">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                </div>
                <div class="navbar__nav">
                    <ul class="navbar__items">
                        <li class="navbar__item" v-for="(value, key, index) in navItems" :key="index">
                            <nuxt-link :to="key">
                                <span>{{ value }}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="navbar__subnav" v-if="showMobileNav">
            <div class="subnav-container">
                <div class="subnav__top">
                    <div class="subnav__top-container">
                        <div class="subnav__home" @click="toggleMobileNav">
                            <nuxt-link :to='"/"'>
                                <h1>C0<sub>2</sub>ST</h1>
                            </nuxt-link>
                        </div>
                        <div @click="toggleMobileNav">
                            <div class="menu__button-close">
                                <div class="cross"></div>
                                <div class="cross"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="subnav__items">
                    <li class="subnav__item" v-for="(value, key, index) in navItems" :key="index" @click="toggleMobileNav">
                        <nuxt-link :to="key">
                            <span>{{ value }}</span>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            showMobileNav: false,
            mobile: false,
            navItems: {
                'calculator': 'Calculator',
                'get-involved': 'Get Involved',
                'news': 'News'
            }
        }
    },
    mounted () {
        this.checkMobile()
        this.windowResize()
    },
    methods: {
        checkMobile () {
            (window.innerWidth >= 514) ? this.mobile = true : this.mobile = false
        },
        toggleMobileNav () {
            this.showMobileNav = !this.showMobileNav
        },
        windowResize () {
            window.onresize = () => this.checkMobile()
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';
a {
    color: black;
}
h1 {
    font-size: 32px;
}

sub { 
    vertical-align: sub;
    font-size: smaller;
}

.navbar {
    // background-color: $green-600;
    background-color: white;
    height: $navbar-height;
    display: grid;
    align-content: center;
}
.navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.content-navbar {
    background-color: white;
}
.navbar-left {
    display:  grid;
    align-content:  center;
}
.navbar__nav{
    display: none;
    @include tablet {
        display: initial;
    }
}
.navbar__menu {
    @include tablet {
        display: none;
    }
}
.navbar__items {
    display: flex;
}
.navbar__item {
    margin-left: 24px;
}
.navbar__subnav {
    position: fixed;
    height: 100%;
    width: 100%;
    // background-color: $green-600;
    background-color: #757575;
    z-index: 999;
}
.subnav-container {
    height:  80%;
}
.subnav__top {
    height: $navbar-height;
    display: grid;
    align-content: center;
}
.subnav__top-container {
    display: flex;
    justify-content: space-between;
    margin: 0 32px;
}
.subnav__home h1 {
    color: white;
}
.subnav__items {
    display: grid;
    justify-content: center;
    align-content: center;
    height: 60%;
}

.subnav__item {
    font-size: 24pt;
    margin: 16px 0;

    span {
        color: white;
    }
}


.line {
    width: 24px;
    height: 2px;
    background: black;
    margin: 6px 0;
    transition: all linear .2s;
}

.cross {
    width: 24px;
    height: 2px;
    background: white;
    margin: 3px 0;

    &:nth-child(1) {
        transform: translate3d(0, 5px, 0) rotate(45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .2s .3s;
    }
    &:nth-child(2) {
        transform: rotate(-45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .1s .5s;
    }
}

</style>
