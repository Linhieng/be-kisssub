function http2https() {
    const download = document.querySelector('a#download')
    if (document) {
        download.setAttribute('href', download.href.replace(/^http:/, 'https:'))
    } else {
        setTimeout(() => {
            http2https()
        })
    }
}

window.addEventListener('load', http2https)
