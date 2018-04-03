<template>
    <div class="site__container">
        <site-header/>
            <div class="temp-container">
                <nuxt/>
            </div>
        <site-footer/>
    </div>
</template>

<script>
import SiteHeader from '~/components/shared/SiteHeader'
import SiteFooter from '~/components/shared/SiteFooter'

export default {
    components: {
        SiteHeader,
        SiteFooter
    }
}
</script>

<style lang="scss" scoped>
.temp-container {
    min-height: 50vh;
}
</style>
