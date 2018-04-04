<template>
<div class="article">
        <div slot="content">
            <h4 class="article__date">{{ articleDate(article.date) }}</h4>
            <h1 class="article__title">{{ article.title }}</h1>
            <div class="article__body" v-html="article.body"></div>
        </div>
        <div slot="pagination">
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
</div>
</template>


<script>
/* eslint-disable */
export default {
  asyncData: async ({ app, route }) => ({
    articles: await app.$content('/articles').getAll(),
    article: await app.$content('/articles').get(route.path)
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
  },
  transition: {
    name: 'slide-right',
    enterClass: 'slide-right-enter-to',
    enterToClass: 'slide-right-to',
    enterActiveClass: 'slide-right-active',
    leaveClass: 'slide-right-leave',
    leaveToClass: 'slide-right-leave-to',
    leaveActiveClass: 'slide-right-active'
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/util";
.article__date {
  @include lato-reg;
  color: grey;
  margin: 32px 0;
}

.article__title {
  @include lato-bold;
  line-height: 2.8rem;
  margin: 64px 0;
  font-size: 26pt;
}


.pagination {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'left right';
  @include lato-reg;
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

@media screen and (min-width: $bp-tablet) {
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
