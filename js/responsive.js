let show = true

const menuSection = document.querySelector('.menu')
const menuToggle = document.querySelector('.Tmenu')
const listaMenu = document.getElementsByClassName('li')

menuToggle.addEventListener('click', () => {
    menuSection.classList.toggle('on', show)
    show = !show
})

for(let i = 0; i < listaMenu.length; i++){
    listaMenu[i].addEventListener('click', () => {
        menuSection.classList.toggle('on', show)
        show = !show
    })
}
