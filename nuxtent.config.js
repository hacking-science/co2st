module.exports = {
  content: [
    ['articles', {
      page: '/_article',
      permalink: 'articles/:slug',
      generate: ['get', 'getAll']

    }]
  ],
  api: {
    baseURL: ''
  }
}
