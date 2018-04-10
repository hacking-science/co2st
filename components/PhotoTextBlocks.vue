<template>
    <section class="home__content">
        <photo-text-block 
        :info="info"
        v-for="(info, index) in infoList" 
        :key="index">
        </photo-text-block>
    </section>
</template>

<script>
import PhotoTextBlock from '@/components/PhotoTextBlock'
import vp from '@/lib/vp'

export default {
    components: {
        PhotoTextBlock
    },
    props: {
        infoList: { type: Array }
    },
    mounted () {
        this.addFadeInEffect()
    },
    methods: {
        addFadeInEffect () {
            window.addEventListener('scroll', this.fadeInEffect)
        },
        fadeInEffect () {
            Array.from(this.$el.querySelectorAll('.p-t-block__image')).forEach(e => {
                if (vp.isInViewport(e)) {
                    e.classList.add('fade-in')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.home__content > *:not(:first-child) {
    margin: 150px 0;
}
</style>
