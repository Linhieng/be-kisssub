function http2https() {
    const eleDownload = document.querySelector('a#download[href^="http://v2"]')
    if (eleDownload) {
        eleDownload.setAttribute(
            'href',
            eleDownload.href.replace(/^http:/, 'https:'),
        )
    } else {
        setTimeout(() => {
            http2https()
        })
    }
}

http2https()
