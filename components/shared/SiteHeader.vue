<template>
    <nav class="navbar" :class="layoutStyle">
        <div class="navbar-container">
            <div class="navbar__left">
                <div class="navbar__home" v-if="!showMobileNav">
                    <nuxt-link :to='"/"'>
                        <h1>C02ST</h1>
                    </nuxt-link>
                </div>
            </div>
            <div class="navbar__right">
                <div class="navbar__menu" v-if="!mobile && !showMobileNav">
                    <div @click="toggleMobileNav">
                        <div class="menu__button-open">
                            <div class="line open"></div>
                            <div class="line open"></div>
                            <div class="line open"></div>
                        </div>
                    </div>
                </div>
                <div class="navbar__nav" v-if="mobile">
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
                                <h1>C02ST</h1>
                            </nuxt-link>
                        </div>
                        <div @click="toggleMobileNav">
                            <div class="menu__button-close">
                                <div class="cross open"></div>
                                <div class="cross open"></div>
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
                'about': 'About',
                'get-involved': 'Get Involved',
                'articles': 'Articles'
            }
        }
    },
    mounted () {
        this.windowResize()
    },
    computed: {
        isLanding () {
            return ['/', ...Object.keys(this.navItems)].indexOf(this.$route.path) > -1
        },
        layoutStyle () {
            return this.isLanding ? 'landing-navbar' : 'content-navbar'
        }
    },
    methods: {
        toggleMobileNav () {
            this.showMobileNav = !this.showMobileNav
        },
        windowResize () {
            window.onresize = () => { (window.innerWidth >= 514) ? this.mobile = true : this.mobile = false }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/_variables.scss';

.navbar {
    background-color: $green-600;
    height: $navbar-height;
    display: grid;
    align-content: center;
}
.navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 32px;
}
.landing-navbar {
    h1,
    span {
        color: white;
    }
    .line {
        background: white;
    }
}
.content-navbar {
    background-color: white;
}
.navbar-left {
    display:  grid;
    align-content:  center;
}
.navbar__items {
    display: flex;
}
.navbar__item {
    margin-left: 12px;
}
.navbar__subnav {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $green-600;
    z-index: 999;
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
        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
    &:nth-child(2) {
        transform: rotate(-45deg);
        clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%);
    }

    &:nth-child(1).open {
        transform: translate3d(0, 5px, 0) rotate(45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .2s .3s;
    }
    &:nth-child(2).open {
        transform: rotate(-45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .1s .5s;
    }
}
</style>
