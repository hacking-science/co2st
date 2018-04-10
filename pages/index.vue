<template>
    <div>
        <main-container>
            <div slot="content">
                <div class="home">
                    <div class="home__header">
                        <div class="home__header-container w-85">
                            <div class="header__content">
                                <h2 class="header__text">
                                    Passing power to the consumer
                                </h2>
                                <div class="header__video">
                                    <video src="videos/video1.mp4" autoplay muted loop></video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <photo-text-blocks :infoList="infoList"></photo-text-blocks>
                </div>
            </div>
        </main-container>
    </div>
</template>

<script>
import MainContainer from '@/components/shared/MainContainer'
import PhotoTextBlocks from '@/components/PhotoTextBlocks'

export default {
    components: {
        MainContainer,
        PhotoTextBlocks
    },
    data () {
        return {
            infoList: [
                {
                    title: 'Our mission',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo massa, vel pretium nulla viverra in. Vestibulum ornare luctus sem in rutrum. Proin vel orci in erat elementum mollis. Ut gravida aliquam sodales. Cras ut justo tellus. Donec lobortis in neque quis vulputate. Vestibulum vitae massa ac lacus tempor elementum.',
                    image: 'img/home/coin-trick.jpg'
                },
                {
                    title: 'section 2',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo massa, vel pretium nulla viverra in. Vestibulum ornare luctus sem in rutrum. Proin vel orci in erat elementum mollis. Ut gravida aliquam sodales. Cras ut justo tellus. Donec lobortis in neque quis vulputate. Vestibulum vitae massa ac lacus tempor elementum.',
                    image: 'img/home/slow-down.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.home__header-container {
    height: calc(100vh - #{$navbar-height});
    @include center-child-horiz-vert;
}
.header__text {
    margin-bottom: 16px;
}

.header__video video {
    width: 100%;
}
</style>
