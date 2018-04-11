<template>
    <div class="p-t-block">
        <div class="p-t-block-container" :class="`block_${index}`">
            <div class="p-t-block__text">
                <div class="p-t-block__text-wrapper">
                    <h2 class="p-t-block__title">{{ info.title }}</h2>
                    <p class="p-t-block__text">{{ info.text }}</p>
                </div>
            </div>
            <div class="p-t-block__image">
                <img :src="info.image" :alt="info.title">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: { type: Object },
        index: { type: Number }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

img {
    width: 100%;
}
.p-t-block-container {
    @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'content image';
        grid-gap: 64px;
    }
}
.p-t-block__text {
    grid-area: content;
    @include center-child-horiz-vert;

    p {
        font-size: 14pt;
    }
}
.p-t-block__image {
    grid-area: image;
    display: none;
    // opacity: 0;
    transform: translateX(120%);
}

.fade-in {
    display: initial;
    animation: slide-in forwards 1s;
}

.block_1 {
    grid-template-areas: 'image content';
    .p-t-block__image {
        transform: translateX(-120%);
    }
}

@keyframes slide-in {
    100% {transform: translateX(0%);}
}

.p-t-block__title {
    margin-bottom: 16px;
}
.p-t-block__text {
    line-height: 1.4;
}

.p-t-block__image {
    margin: 32px 0;
}
</style>
