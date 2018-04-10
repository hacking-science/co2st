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
                    <nuxt-link :to="'calculator'">
                    <div class="pagination">
                        <div class="pagination__box">
                            <div class="pagination__text">
                                <span>Go to the Carbon Cost Calculator</span>
                            </div>
                            <div class="pagination__arrow-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 8 8">
                                    <path d="M5 0v2h-5v1h5v2l3-2.53-3-2.47z" transform="translate(0 1)" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
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

.pagination {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: '. right';

  .pagination__box {
    grid-area: right;
    background-color: #191919;
    display: grid;
    justify-content: start;
    height: 48px;
    display: flex;
    align-content: center;
    padding: 16px;
    
    .pagination__arrow-right {
      display: grid;
      flex-direction: column;
      align-content: center;
    }
    .pagination__text {
      margin-left: 16px;
      @include center-child-vert;
      color: white;
      line-height: 1.4;
    }
  }
}
</style>
