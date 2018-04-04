<template>
  <div>
    <main-container>
    <ul slot="content" class="article__list">
      <li v-for="(article, index) in articles" v-bind:key="index">
        <nuxt-link :to="article.path">
          <div class="article__item">
            <h4 class="article__date">{{ articleDate(article.date) }}</h4>
            <h2 class="article__title">{{ article.title }} </h2>
          </div>
        </nuxt-link>
      </li>
    </ul>
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
      return `${d[2]} ${d[1]}`
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/util";

.article__list li {
  margin: 32px 0;
}

.article__date {
  margin-bottom: 8px;
  color: grey;
  white-space: nowrap;
}
.article__title {
  font-size: 14pt;
  margin: 0;
}

@media screen and (min-width: $bp-tablet) {
  .article__item {
    display: grid;
    grid-template-columns: 80px 1fr;
  }
  .article__date {
    margin-right: 32px;
  }
}

</style>
