<template>
    <div>
        <main-container>
            <div class="home__header" slot="content">
                <div class="home__header-container w-85">
                    <div class="header__content">
                        <div class="header__titles">
                            <div class="header__animation">
                                <svg width="0" height="0">
                                    <defs>
                                        <clipPath id="myClip">
                                            <text x="0" y="0">
                                                <tspan x="0" dy="1.32em">carbon</tspan>
                                                <tspan x="0" dy="0.92em">cost</tspan>
                                            </text>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                <video id="myVideo" class="clip-svg" autoplay loop>    
                                    <source id="ss"  :src="`videos/video${video_count}.mp4`" type='video/mp4'>
                                </video>
                            </div>
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
    },
    data () {
        return {
            video_count: 1
        }
    },
    mounted () {
        let source = this.$el.querySelector('#ss')
        console.log(source)
        source.addEventListener('ended', this.runNextVideo, false)
    },
    methods: {
        runNextVideo () {
            this.video_count++
            if (this.video_count === 4) this.video_count = 1
            let video = this.$el.querySelector('#myVideo')
            let source = this.$el.querySelector('#ss')
            source.setAttribute('src', 'videos/video' + this.video_count + '.mp4')
            video.load()
            video.play()
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';

.home__header {
    // background-color: $green-600;
    background-color: white;
}
.home__header-container {
    height: calc(100vh - #{$navbar-height});
}
.header__content {
    height: 90%;
    display: grid;
    align-content: end;

    svg {
        position: relative;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 700;
        font-size: 120px;
    }

    .clip-svg {
        clip-path: url(#myClip);
    }

    video {
        width: 500px;
    }
    .header__animation {
        width: 400px;
    }
}
.header__titles {
    font-weight: 700;
}
.header__titles h2 {
    font-size: 120pt;
    color: white;
}
.header__titles span {
    font-size: 70pt;
    display: block;
    // color: whitesmoke;
    color: black;
}
</style>
