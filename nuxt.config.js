// const axios = require('axios')

/* eslint-disable */
module.exports = {
  head: {
    title: 'CO2ST',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CO2ST Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxtent', '@nuxtjs/sitemap'

    // ['@nuxtjs/google-analytics', { ua: 'UA-80644113-1' }]
  ],
  css: [
    { src: '~assets/sass/global.scss', lang: 'scss' }
  ],
  // sitemap: {
  //   generate: true,
  //   routes: () => {
  //     return axios
  //       .get('http://localhost:3000/content-api')
  //       .then(res => {
  //         return res.data['content-endpoints']
  //       })
  //       .then(endpoints => {
  //         return Promise.all(
  //           endpoints.map(endpoint => {
  //             return axios.get(`http://localhost:3000/content-api${endpoint}`)
  //           })
  //         )
  //       })
  //       .then(endpoints => {
  //         return endpoints.reduce((routes, endpoint) => {
  //           return routes.concat(endpoint.data.map(page => page.permalink))
  //         }, [])
  //       })
  //   }
  // },
  loading: false
}
