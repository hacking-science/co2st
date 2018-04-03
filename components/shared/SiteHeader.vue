<template>
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar__home">
                <nuxt-link :to='"/"'>
                    <h1>C02ST</h1>
                </nuxt-link>
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
    </nav>
</template>

<script>
export default {
    data () {
        return {
            navItems: {
                'calculator': 'Calculator',
                'about': 'About',
                'get-involved': 'Get Involved',
                'articles': 'Articles'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-container {
    display: flex;
    flex-direction: row;
}
.navbar__items {
    display: flex;
}
.navbar__item {
    margin-left: 12px;
}

</style>
