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
    }
}
</script>
