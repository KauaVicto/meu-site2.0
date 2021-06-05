let show = true

let list = document.getElementsByClassName('list')
let radios = document.getElementsByClassName('radio')
let sele = document.getElementById('sele')

let proj = document.getElementsByClassName('proj')


list[0].addEventListener('click', () => {
    designBtn()
    
    radios[0].checked = true
})

list[1].addEventListener('click', () => {
    webBtn()
    
    radios[2].checked = true
})

list[2].addEventListener('click', () => {
    escolBtn()
    
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
    })
}
