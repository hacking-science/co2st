// Is 200px above bottom of screen
function isInViewport (element) {
    let rect = element.getBoundingClientRect()
    let html = document.documentElement
    return rect.bottom >= 200 && rect.top <= (window.innerHeight || html.clientHeight)
}
// Specify pixels above bottom
function isInViewportPixels (element, pixels) {
    let rect = element.getBoundingClientRect()
    let html = document.documentElement
    return rect.bottom >= pixels && rect.top <= (window.innerHeight || html.clientHeight)
}

// function isInViewportCompletely (element) {
//     let rect = element.getBoundingClientRect()
//     let html = document.documentElement
//     return rect.bottom <= (window.innerHeight || html.clientHeight) && rect.top >= 0
// }

export default {
    isInViewport,
    isInViewportPixels
}
