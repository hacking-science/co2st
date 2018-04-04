<template>
    <div class="menu">
        <div class="menu__button">
            <div class="menu__button-open">
                <div class="line open"></div>
                <div class="line open"></div>
                <div class="line open"></div>
            </div>
            <div class="menu__button-close">
                <div class="cross"></div>
                <div class="cross"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleNav: function () {
            this.$el.querySelector('ul').classList.toggle('open')
            this.$el.querySelectorAll('.menu__button-open *').forEach(line => line.classList.toggle('open'))
            this.$el.querySelectorAll('.menu__button-close *').forEach(cross => cross.classList.toggle('open'))
        },
        // Close menu when home button clicked
        closeMenu: function () {
            if (!this.$el.querySelector('.menu__button-open *').classList.contains('open')) this.toggleNav()
        }
    }
}
</script>


<style lang="scss" scoped>
.menu {
    text-align: right;
    position: fixed;
    top: 4px;
    right: -8px;
    z-index: 999;

    .menu__button {
        margin-right: 12px;
        position: relative;
        border-radius: 50%;
        padding: 14px;
        background-color: white;
        display: inline-flex;
        cursor: pointer;
    }
    .menu__button-open {
        display: inline-flex;

        display: inline-block;
        margin-right: 0;
        width: 16px; 
    }
    .menu__button-close {
        padding: 14px;
        position: absolute;
        top: 0;
        right: 0;
        &:hover {
          transform: scale(1.15);
        }
    }
}

.menu__list {
    margin-top: 8px;
    ul {
        list-style: none;
        padding-right: 12px;
        overflow: hidden;
        border-radius: 3px;
        li {
            margin: 4px 0;
            transform: translate3d(160px, 0, 0);
            cursor: pointer;
            &:nth-child(1) {
                transition: all 0.2s ease-in;
            }
            &:nth-child(2) {
                transition: all 0.2s ease-in 0.1s;
            }
            &:nth-child(3) {
                transition: all 0.2s ease-in 0.2s;
            }
            a {
                color: black;
                text-decoration: none;
            }
        }
        .menu__item {
            display: inline-flex;
            background-color: white;
            border-radius: 20px;
            padding: 12px 16px;

            &:hover {
              color: crimson;
            }
        }
    }
    ul.open li {
        transform: translate3d(0, 0, 0);
    }
}

@media screen and (min-width: 800px) {
    // Move menu button
    .menu {
        right: -14px;
        .menu__button {
            margin-right: 32px;
        }
    }
    .menu__list {
        ul {
            padding-right: 32px;
        }
    }

    // Hover hamburger icon 
    .menu__button:hover {
        .line.open:nth-child(1) {
            clip-path: polygon(0 0, 70% 0, 70% 100%, 0 100%);
        }
        .line.open:nth-child(2) {
            clip-path: polygon(30% 0, 100% 0, 100% 100%, 30% 100%);
            transition: all linear .2s .1s;
        }
        .line.open:nth-child(3) {
            clip-path: polygon(0 0, 70% 0, 70% 100%, 0 100%);
        }
    }
}


.line {
    width: 16px;
    height: 2px;
    background: black;
    margin: 3px 0;
    transition: all linear .2s;
    &:nth-child(1) {
        // transform right
        transform: translate3d(16px, 0, 0); // clip to left-hand side
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    &:nth-child(2) {
        transform: translate3d(-16px, 0, 0);
        clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
        transition: all linear .2s .1s;
    }
    &:nth-child(3) {
        transform: translate3d(16px, 0, 0);
        clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    }
    &.open {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transform: translate3d(0, 0, 0);
    }
}
.cross {
    width: 16px;
    height: 2px;
    background: crimson;
    margin: 3px 0;

    &:nth-child(1) {
        transform: translate3d(0, 5px, 0) rotate(45deg); 
        clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
    &:nth-child(2) {
        transform: rotate(-45deg);
        clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%);
    }

    &:nth-child(1).open {
        transform: translate3d(0, 5px, 0) rotate(45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .2s .3s;
    }
    &:nth-child(2).open {
        transform: rotate(-45deg); 
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        transition: all linear .1s .5s;
    }
}
</style>
