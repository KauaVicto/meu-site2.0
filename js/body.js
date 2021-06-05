let show = true

let web = document.getElementsByClassName('web')
let design = document.getElementsByClassName('design')
let radios = document.getElementsByClassName('radio')
let sele = document.getElementById('sele')

let proj = document.getElementsByClassName('proj')


design[0].addEventListener('click', () => {
    designBtn()
    
    radios[0].checked = true
})

web[0].addEventListener('click', () => {
    webBtn()
    
    radios[2].checked = true
})

function designBtn(){
    design[0].classList.add('on')
    web[0].classList.remove('on')

    sele.style.marginRight = '68px'
}
function webBtn(){
    design[0].classList.remove('on')
    web[0].classList.add('on')

    sele.style.marginRight = '-68px'
}


for(let i = 0;i < radios.length;i++){
    radios[i].addEventListener('click',() => {
        if(radios[0].checked || radios[1].checked){
            designBtn()
        }else if(radios[2].checked || radios[3].checked){
            webBtn()
        }
    })
}
