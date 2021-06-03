let gmail = document.getElementById('gmail')
let wpp = document.getElementById('wpp')

let cwpp = document.getElementById('cwpp')
let cgmail = document.getElementById('cgmail')

let text = document.getElementById('copiar')

gmail.addEventListener('click', function(){
    text.value = "kauavictor259@gmail.com"
    text.select()
    document.execCommand('copy')

    
    cgmail.style.opacity = '1'
    cgmail.style.top = '-75px'

    setTimeout(function() {
        cgmail.style.top = '0'
        cgmail.style.opacity = '0'
    },1000);
})

wpp.addEventListener('click', function(){
    text.value = "77999831299"
    text.select()
    document.execCommand('copy')

    cwpp.style.opacity = '1'
    cwpp.style.top = '-20px'

    setTimeout(function() {
        cwpp.style.top = '0'
        cwpp.style.opacity = '0'
    },1000);
})