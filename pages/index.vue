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
                    <div class="home__content w-85">
                        <photo-text-blocks :infoList="infoList"></photo-text-blocks>
                    </div>
                    <nuxt-link :to="'calculator'">
                    <div class="pagination">
                        <div class="pagination__box">
                            <div class="pagination__text">
                                <span>Go to the C02 Allowance Calculator</span>
                            </div>
                            <div class="pagination__arrow">
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
                    title: 'What is the cost of a product?',
                    text: 'Every thing we buy comes with a cost. You might think the cost is the price you pay at the checkout till. But that is not the cost, that is the price - the value given to it based on what customers are willing to pay. The real cost of a product is what we, all of us, have lost to gain it. Producing and delivering goods and services has an environmental impact that we can and do know, including the carbon emissions that contribute to climate change. Our mission is simple - we want to know the cost before we buy. ',
                    image: 'img/home/coin-trick.jpg'
                },
                {
                    title: 'A simple concept, a powerful change',
                    text: 'The markets today prioritse delivering products to consumers as cheaply as possinlet the lowest prices and we consumers typically base our buying on these prices. But just as we also look at the calories possible but this is often at the expnse of our shared environment. We make ',
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
.header__content {
    @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.pagination {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: '. right';
  margin-bottom: 32px;

  .pagination__box {
    grid-area: right;
    background-color: #191919;
    display: grid;
    justify-content: start;
    height: 80px;
    display: flex;
    align-content: center;
    padding: 16px;
    
    .pagination__arrow {
      display: grid;
      flex-direction: column;
      align-content: center;
      animation-name: rock-back-and-forth;
      animation-duration: 1s;
      animation-iteration-count: infinite;

    }
    .pagination__text {
      margin-left: 16px;
      @include center-child-vert;
      color: white;
      line-height: 1.4;
      font-size: 14pt;
    }
  }
}

@keyframes rock-back-and-forth {
    0% {transform: translate3d(8px, 0, 0);}
    50% {transform: translate3d(-8px, 0, 0);}
    100% {transform: translate3d(8px, 0, 0);}
}
</style>
