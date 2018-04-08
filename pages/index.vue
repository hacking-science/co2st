<template>
    <div>
        <main-container>
            <div class="home__header" slot="content">
                <div class="home__header-container w-85">
                    <div class="header__content">
                        <div class="header__titles">
                            <h2>carbon cost</h2>
                            <span>made</span>
                            <span>simple</span>
                        </div>
                    </div>
                </div>
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


<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.home__header {
    background-color: $green-600;
}
.home__header-container {
    height: calc(100vh - #{$navbar-height});
}
.header__content {
    height: 70%;
    display: grid;
    align-content: end;
}
.header__titles {
    font-weight: 700;
}
.header__titles h2 {
    font-size: 60pt;
    color: white;
}
.header__titles span {
    font-size: 60pt;
    display: block;
    color: whitesmoke;
}
</style>
