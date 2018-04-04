<template>
    <div class="home__header">
        <div class="header__content">
            <div class="header__titles">
                <h2>carbon cost</h2>
                <span>made</span>
                <span>simple</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import 'assets/sass/_variables.scss';

.home__header {
    height: calc(100vh - #{$navbar-height});
    background-color: $green-600;
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
    font-size: 44pt;
    color: white;
}
.header__titles span {
    font-size: 44pt;
    display: block;
    color: whitesmoke;
}
</style>
