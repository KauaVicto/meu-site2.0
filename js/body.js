let show = true

let web = document.getElementsByClassName('web')
let design = document.getElementsByClassName('design')

let proj = document.getElementsByClassName('proj')


web[0].addEventListener('click', () => {
    show = true
    web[0].classList.toggle('on', show)

    show = !show
    design[0].classList.toggle('on', show)

    show = false

    if(!proj[1].classList.contains("on")){
        proj[0].classList.toggle('on', show)

        show = !show
        proj[1].classList.toggle('on', show)
    }

})

design[0].addEventListener('click', () => {
    show = true
    design[0].classList.toggle('on', show)

    show = !show
    web[0].classList.toggle('on', show)

    show = false

    if(!proj[0].classList.contains("on")){
        proj[1].classList.toggle('on', show)

        show = !show
        proj[0].classList.toggle('on', show)
    }

})