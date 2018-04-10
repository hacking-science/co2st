<template>
    <div class="p-t-block">
        <div class="p-t-block-container w-85">
            <div class="p-t-block__text">
                <h2 class="p-t-block__title">{{ info.title }}</h2>
                <p class="p-t-block__text">{{ info.text }}</p>
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
        info: { type: Object }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
}

.p-t-block__image {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    transition: all cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.6s;
}

.fade-in {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.p-t-block__text {
    line-height: 1.4;
}

.p-t-block__image {
    margin: 32px 0;
}
</style>
