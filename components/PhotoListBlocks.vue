<template>
    <div class="get-involved__content">
        <photo-list-block 
        :info="info"
        v-for="(info, index) in infoList" 
        :key="index">
        </photo-list-block>
    </div>
</template>

<script>
import PhotoListBlock from '@/components/PhotoListBlock'

export default {
    components: {
        PhotoListBlock
    },
    props: {
        infoList: { type: Array }
    },
    mounted () {
        this.addParallax()
    },
    methods: {
        parallax () {
            [...this.$el.querySelectorAll('.p-l-block__content')].forEach((e, index) => {
                const ratio = this.getParallaxRatio(e)
                this.applyMatrixTransformation(e, ratio)
            })
        },
        getParallaxRatio (element) {
            let rect = element.getBoundingClientRect()
            let html = document.documentElement
            let midViewPort = html.clientHeight / 2
            let midEl = (rect.top + rect.bottom) / 2
            const ratio = (midEl - midViewPort) / midViewPort
            return ratio
        },
        applyMatrixTransformation (element, ratio) {
            element.style.transform = `matrix(1, 0, 0, 1, 0, ${ratio * 40})`
        },
        addParallax () {
            window.addEventListener('scroll', this.parallax)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.get-involved__content {
    @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 64px;
    }
}
</style>
