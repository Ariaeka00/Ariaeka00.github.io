
window.onscroll = () => {
    const header = document.querySelector('header')
    const fixnav = header.offsetTop
    
    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
    
}

// hamburger
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})
