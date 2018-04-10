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
