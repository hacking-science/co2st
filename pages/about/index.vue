<template>
    <div>
        <main-container>
            <div class="about" slot="content">
                <Example></Example>
                <div class="cotnainer">
                    <h1>Title</h1>
                </div>
            </div>
        </main-container>
    </div>
</template>

<script>
import MainContainer from '@/components/shared/MainContainer'
import Example from '@/components/Example'

export default {
    components: {
        MainContainer,
        Example
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";

.cotnainer {
    height: 50vh;
    @include center;
}

h1 {
    @include bold;
}

</style>

