let count = 1

let list = document.getElementsByClassName('list')
let radios = document.getElementsByClassName('radio')
let sele = document.getElementById('sele')
let imgs = document.getElementsByClassName('imgs')

let proj = document.getElementsByClassName('proj')


list[0].addEventListener('click', () => {
    designBtn()

    count = 1
    radios[0].checked = true
})

list[1].addEventListener('click', () => {
    webBtn()

    count = 4
    radios[3].checked = true
})

list[2].addEventListener('click', () => {
    escolBtn()
    count = 6
    radios[5].checked = true
})

function designBtn(){
    list[0].classList.add('on')
    list[1].classList.remove('on')
    list[2].classList.remove('on')

    sele.style.marginRight = '139px'
    sele.style.width = '92px'
    
}
function webBtn(){
    list[0].classList.remove('on')
    list[1].classList.add('on')
    list[2].classList.remove('on')

    sele.style.marginRight = '-33px'
    sele.style.width = '56px'
}
function escolBtn(){
    list[0].classList.remove('on')
    list[1].classList.remove('on')
    list[2].classList.add('on')

    sele.style.marginRight = '-170px'
    sele.style.width = '56px'
}


for(let i = 0;i < radios.length;i++){
    radios[i].addEventListener('click',() => {
        if(radios[0].checked || radios[1].checked || radios[2].checked){
            designBtn()
        }else if(radios[3].checked || radios[4].checked){
            webBtn()
        }else if(radios[5].checked || radios[6].checked){
            escolBtn()
        }
        count = i + 1
    })
}

/* Automatic */

setInterval(() => {
    document.getElementById('radio' + count).checked = true
    count++

    if(count <= 4){
        designBtn()
    }else if(count <= 6){
        webBtn()
    }else if(count < 8){
        escolBtn()
    }else{
        count = 1
    }
    
}, 3000)

/* Abrindo img */

let img = document.createElement('img')

for(let i = 0;i < imgs.length;i++){
    imgs[i].addEventListener('click', () => {

        img.src = $(imgs[i]).attr("src")
        
        document.body.appendChild(img)

        img.style.height = '80vh'
        img.style.position = 'fixed'
        img.style.top = '50%'
        img.style.left = '50%'
        img.style.transform = 'translate(-50%, -50%)'
        img.style.opacity = '1'
        img.style.boxShadow = '0px 0px 0px 200vw rgba(0, 0, 0, 0.6)'
    })
}


img.addEventListener('click', () => {
    img.remove()
})
