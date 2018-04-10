module.exports = {
    content: [
        ['news', {
            page: '/_article',
            permalink: 'news/:slug',
            generate: ['get', 'getAll']
        }]
    ],
    api: {
        baseURL: ''
    }
}
