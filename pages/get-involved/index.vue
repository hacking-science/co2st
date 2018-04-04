<template>
    <div>
        <main-container>
            <div class="about" slot="content">
                about
            </div>
        </main-container>
    </div>
</template>

<script>
import MainContainer from '@/components/shared/MainContainer'
export default {
    components: {
        MainContainer
    }
}
</script>
