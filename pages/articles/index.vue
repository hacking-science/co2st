<template>
  <div>
    <main-container>
      <div class="articles" slot="content">
        <ul class="article__list">
          <li v-for="(article, index) in articles" v-bind:key="index">
            <nuxt-link :to="article.path">
              <div class="article__item">
                <img :src="article.image" :alt="article.title">
                <div class="article__text w-85">
                  <h2 class="article__title">{{ article.title }} </h2>
                  <p class="article__summary">{{ article.summary }}</p>
                  <span class="article__date">{{ articleDate(article.date) }}</span>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
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
    articles: await app.$content('/articles').getAll()
  }),

  methods: {
    articleDate (date) {
      const d = new Date(date).toString().split(' ')
      return `${d[2]} ${d[1]} ${d[3]}`
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/util";

h2 {
  line-height: 1.4;
}

img {
  width: 100%;
}

a {
  color: black;
}

.articles {
  text-align: center;
}

.article__item {
  margin-bottom: 64px;
}

.article__date {
  margin-bottom: 8px;
  color: grey;
  font-size: 9pt;
}
.article__title {
  font-size: 14pt;
  margin: 32px 0;
}
.article__summary {
  color: lightslategrey;
  line-height: 1.3;
  margin-bottom: 32px;
  font-size: 10pt;
}

@media screen and (min-width: $tablet-width) {
  .article__item {
    display: grid;
    grid-template-columns: 80px 1fr;
  }
  .article__date {
    margin-right: 32px;
  }
}

</style>
