const responsive = document.getElementById('responsive')
const nav = document.getElementById('responsive-nav')
let state = 0

responsive.addEventListener('click', ()=>{
    if (state == 0) {
        responsive.firstElementChild.src = 'hamburger-icon.png'
        nav.style.display = 'none'
        state = 1
    }
    else if (state == 1) {
        responsive.firstElementChild.src = 'close-icon.png'
        nav.style.display = 'block'
        state = 0
    }
})
console.log(responsive.firstElementChild)