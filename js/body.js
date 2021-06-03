let sEsq = document.getElementById('sEsq');
let sDir = document.getElementById('sDir');
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')

let imgs = document.getElementsByClassName('imagens')
imgs[0].style.height = '250px'
imgs[1].style.height = '250px'

let numimg = 1

sDir.addEventListener('click', passarDireita)
sEsq.addEventListener('click', passarEsqueda)
b2.addEventListener('click', passarDireita)
b1.addEventListener('click', passarEsqueda)

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('click', () =>{

        if(imgs[i].style.height == '250px'){
            setTimeout(() => {
                imgs[i].style.height = '893px'
                imgs[i].style.zIndex = '20'
                imgs[i].style.left = '-25vw'
                imgs[i].style.boxShadow = '0px 0px 0px 200vw rgba(0, 0, 0, 0.6)'
            },10)
            
        }
    })
    document.addEventListener('click', () => {
        if(imgs[i].style.height == '893px'){
            imgs[i].style.height = '250px'
            imgs[i].style.left = '0'
            imgs[i].style.zIndex = '2'
            imgs[i].style.boxShadow = 'none'
        }
    })
}


function passarDireita(){
    if(numimg == 1){
        numimg++

        imgs[0].style.opacity = '0'
        imgs[0].style.zIndex = '-2'
        imgs[0].style.height = '250px'

        imgs[1].style.opacity = '1'
        imgs[1].style.zIndex = '2'

        b1.style.backgroundColor = '#ffffff80'
        b2.style.backgroundColor = '#ffffff'

        imgs[0].style.left = '-200px'
        setTimeout(() => {
            imgs[0].style.left = '0'
        },500)
    }else{
        passarEsqueda()
    }
}

function passarEsqueda(){
    if(numimg == 2){
        numimg--

        imgs[0].style.opacity = '1'
        imgs[0].style.zIndex = '2'

        imgs[1].style.opacity = '0'
        imgs[1].style.zIndex = '-2'
        imgs[1].style.height = '250px'

        b1.style.backgroundColor = '#ffffff'
        b2.style.backgroundColor = '#ffffff80'

        imgs[1].style.left = '200px'
        setTimeout(() => {
            imgs[1].style.left = '0'
        },500)
    }else{
        passarDireita()
    }
}

// function abrirImg(i){
//     console.log('deu certo '+i)
// }

// setInterval(() => {
//     passarDireita()
// }, 10000)

// setInterval(() => {
//     passarEsqueda()
// }, 20000);