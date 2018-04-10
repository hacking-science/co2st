<template>
    <div class="p-l-block">
        <div class="p-l-block-container">
            <div class="p-l-block__image">
                <img :src="info.image" :alt="info.title">
            </div>
            <div class="p-l-block__content">
                <h3 class="p-l-block__title">{{ info.title }}</h3>
                <ul class="p-l-block__list">
                    <li class="p-l-block__list-item" v-for="(item, index) in info.list" :key="index">
                        <span>{{ item }}</span>
                    </li>
                </ul>
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
.p-l-block {
    margin: 128px 0;
}
.p-l-block__content {
    background-color: rgba(63, 191, 191, 0.3);
    padding: 16px;
}
.p-l-block__list {
    margin: 16px 0;
    list-style: disc;
    list-style-position: inside;
}

.p-l-block__list-item {
    margin: 8px 0;
}
.p-l-block__image {
    padding: 16px;
}

</style>
