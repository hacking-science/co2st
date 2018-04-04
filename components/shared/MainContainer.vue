<template>
    <div>
        <site-header/>
        <slot name="content"/>
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
