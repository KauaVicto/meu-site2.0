let html = document.getElementById('html')

$(document).ready(() => {
    $('#loading').delay(2000).fadeOut('slow')
    setTimeout(() => {
        html.style.overflowY = 'scroll'
    }, 2000)
    
})