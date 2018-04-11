<template>
    <div>
        <main-container>
            <div class="about" slot="content">
                <div class="about__header">
                    <div class="about__header-container">
                        <div class="header__content">
                            <h2 class="header__text">
                                Get involved
                            </h2>
                            <div class="header__video">
                                <video src="videos/video1.mp4" autoplay muted loop></video>
                            </div>
                        </div>
                    </div>
                </div>
                <photo-list-blocks :infoList="infoList"></photo-list-blocks>
                <section class="events w-90">
                    <div class="events__header">
                        <h2 class="events__title">
                            Upcoming events
                        </h2>
                        <p class="events__text">{{ events.text }}</p>
                    </div>
                    <div class="events__calendar">
                        <iframe :src="events.url" style="border: 0" frameborder="0" scrolling="no"></iframe>
                    </div>
                </section>
            </div>
        </main-container>
    </div>
</template>

<script>
// import parallax from '@/lib/parallax'

import MainContainer from '@/components/shared/MainContainer'
import PhotoListBlocks from '@/components/PhotoListBlocks'

export default {
    components: {
        MainContainer,
        PhotoListBlocks
    },
    data () {
        return {
            infoList: [
                {
                    title: 'Section 1',
                    list: [
                        'Point 1',
                        'Point 2',
                        'Point 3'
                    ],
                    image: 'img/home/coin-trick.jpg'
                },
                {
                    title: 'Section 2',
                    list: [
                        'Point 1',
                        'Point 2',
                        'Point 3'
                    ],
                    image: 'img/home/slow-down.jpg'
                },
                {
                    title: 'Section 3',
                    list: [
                        'Point 1',
                        'Point 2',
                        'Point 3'
                    ],
                    image: 'img/home/slow-down.jpg'
                },
                {
                    title: 'Section 4',
                    list: [
                        'Point 1',
                        'Point 2',
                        'Point 3'
                    ],
                    image: 'img/home/slow-down.jpg'
                }
            ],
            events: {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis commodo massa, vel pretium nulla viverra in.',
                url: 'https://calendar.google.com/calendar/embed?src=en.uk%23holiday%40group.v.calendar.google.com&ctz=Europe%2FLondon'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

iframe {
    width: 100%;
    height: 400px;
}

.about__header-container {
    height: calc(100vh - #{$navbar-height});
    @include center-child-horiz-vert;
}
.header__text {
    margin-bottom: 16px;
}

.header__video video {
    width: 100%;
}
.events__header {
    background-color: white;
    box-shadow: 0px 4px 20px -2px rgba(0,0,0,0.47);
    border-radius: 12px;
    padding: 16px;
}
.events__text {
    margin: 16px 0;
    line-height: 1.5;
}

.events__calendar {
    margin: 40px 0;
}

</style>
