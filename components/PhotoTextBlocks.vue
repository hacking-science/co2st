<template>
    <section class="home__content">
        <photo-text-block 
        :info="info"
        :index="index"
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
            Array.from(this.$el.querySelectorAll('.p-t-block')).forEach(e => {
                if (vp.isInViewportPixels(e, 200)) {
                    e.getElementsByClassName('p-t-block__image')[0].classList.add('fade-in')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.home__content > *:not(:first-child) {
    margin: 96px 0;
}


</style>
