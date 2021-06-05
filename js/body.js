let count = 1

let list = document.getElementsByClassName('list')
let radios = document.getElementsByClassName('radio')
let sele = document.getElementById('sele')

let proj = document.getElementsByClassName('proj')


list[0].addEventListener('click', () => {
    designBtn()

    count = 1
    radios[0].checked = true
})

list[1].addEventListener('click', () => {
    webBtn()

    count = 3
    radios[2].checked = true
})

list[2].addEventListener('click', () => {
    escolBtn()
    count = 5
    radios[4].checked = true
})

function designBtn(){
    list[0].classList.add('on')
    list[1].classList.remove('on')
    list[2].classList.remove('on')

    sele.style.marginRight = '136px'
    
}
function webBtn(){
    list[0].classList.remove('on')
    list[1].classList.add('on')
    list[2].classList.remove('on')

    sele.style.marginRight = '1px'
}
function escolBtn(){
    list[0].classList.remove('on')
    list[1].classList.remove('on')
    list[2].classList.add('on')

    sele.style.marginRight = '-136px'
}


for(let i = 0;i < radios.length;i++){
    radios[i].addEventListener('click',() => {
        if(radios[0].checked || radios[1].checked){
            designBtn()
        }else if(radios[2].checked || radios[3].checked){
            webBtn()
        }else if(radios[4].checked || radios[5].checked){
            escolBtn()
        }
        count = i + 1
    })
}

/* Automatic */

setInterval(() => {
    document.getElementById('radio' + count).checked = true
    count++

    if(count <= 3){
        designBtn()
    }else if(count <= 5){
        webBtn()
    }else if(count < 7){
        escolBtn()
    }else{
        count = 1
    }
    
}, 3000)
