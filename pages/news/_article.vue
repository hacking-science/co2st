<template>
<div>
  <main-container>
      <div class="article" slot="content">
        <div class="article__content">
            <h2 class="article__title">{{ article.title }}</h2>
            <img :src="`/${article.image}`" :alt="article.title">
            <div class="article__meta">
              <span class="article__author w-90">By {{ article.author }}</span>
              <span class="article__date w-90">{{ articleDate(article.date) }}</span>
            </div>
            <div class="article__body w-90" v-html="article.body"></div>
        </div>
          <div class="pagination">
              <nuxt-link :to="pageLeftPath">
                <div class="pagination__box">
                    <div class="pagination__left" v-if="pageIndex > 0">
                      <div class="pagination__arrow-left" v-if="showPageLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 8 8">
                          <path d="M3 0l-3 2.53 3 2.47v-2h5v-1h-5v-2z" transform="translate(0 1)" />
                        </svg>
                      </div>
                      <div class="pagination__title">
                        <p>{{ articles[pageLeftIndex].title }}</p>
                      </div>
                  </div>
                </div>
              </nuxt-link>
              <nuxt-link :to="pageRightPath">
                <div class="pagination__box">
                    <div class="pagination__right" v-if="pageIndex < articles.length - 1">
                      <div class="pagination__title">
                        <p>{{ articles[pageRightIndex].title }}</p>
                      </div>
                      <div class="pagination__arrow-right" v-if="showPageRight">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 8 8">
                            <path d="M5 0v2h-5v1h5v2l3-2.53-3-2.47z" transform="translate(0 1)" />
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

/* eslint-disable */
export default {
  components: {
    MainContainer
  },
  asyncData: async ({ app, route }) => ({
    articles: await app.$content('/news').getAll(),
    article: await app.$content('/news').get(route.path)
  }),
  created () {
    this.pageIndex = this.article.meta.index
    this.pageLeftIndex = this.pageIndex - 1
    this.pageRightIndex = this.pageIndex + 1
    if (this.pageIndex > 0 && this.pageIndex < this.articles.length - 1) {
      this.pageLeftPath = this.articles[this.pageLeftIndex].path
      this.pageRightPath = this.articles[this.pageRightIndex].path
    }
    if (this.pageIndex === 0) {
      this.showPageLeft = false
      this.pageRightPath = this.articles[this.pageRightIndex].path
    }
    if (this.pageIndex === this.articles.length - 1) {
      this.showPageRight = false
      this.pageLeftPath = this.articles[this.pageLeftIndex].path
    }
  },
  data () {
    return {
      articles: [],
      pageIndex: '',
      pageLeftIndex: '',
      pageRightIndex: '',
      showPageLeft: true,
      showPageRight: true,
      pageLeftPath: '',
      pageRightPath: ''
    }
  },
  head () {
    return {
      title: this.article.title
    }
  },
  methods: {
    articleDate (date) {
      const d = new Date(date).toString().split(' ')
      return `${d[2]} ${d[1]} ${d[3]}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";

h2 {
  text-align: center;
}

img {
  width: 100%;
}
.article__date {
  color: grey;
  font-size: 10pt;
}

.article__title {
  line-height: 2.8rem;
  margin-bottom: 64px;
  font-size: 26pt;
  text-align: center;
}

.article__body {
  line-height: 1.4;
  margin-bottom: 64px;

  p {
    margin-bottom: 16px;
  }
}

.article__meta {
  display: flex;
  flex-direction: column;
  margin: 16px 0 32px 0;
}

.article__author {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 10pt;

}


.pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'left right';
  p {
    margin: 0;
  }

  .pagination__title {
    display: grid;
    align-content: center;
  }

  .pagination__left {
    grid-area: left;
    border: 1px solid lightgray;
    display: grid;
    justify-content: start;
    height: 48px;
    display: flex;
    align-content: center;
    padding: 16px;
    
    .pagination__arrow-left {
      display: grid;
      flex-direction: column;
      align-content: center;
    }
    .pagination__title {
      margin-left: 16px;
    }
  }
  .pagination__right {
    grid-area: right;
    border: 1px solid lightgray;
    display: grid;
    justify-content: end;
    height: 48px;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    padding: 16px;

    .pagination__title {
      margin-right: 16px;
    }

  .pagination__arrow-right {
      display: grid;
      flex-direction: column;
      align-content: center;
    }
  }
}
.pagination__title p {
  display: none;
}
.pagination__box:hover {
  background-color: $gray-4; 
}

@media screen and (min-width: $tablet-width) {
  .article__title {
    font-size: 40pt;
    line-height: 4rem;
  }
  .pagination .pagination__left {
    padding: 22px;
  }
  .pagination .pagination__right {
    padding: 22px;
  }
  .pagination__title p {
    display: flex;
  }
}

</style>
