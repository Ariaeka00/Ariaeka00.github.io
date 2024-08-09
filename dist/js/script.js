
window.onscroll = () => {
    const header = document.querySelector('header')
    const toTop = document.getElementById('to-top')
    const fixnav = header.offsetTop

    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// hamburger
const hamburger = document.getElementById('hamburger')
const navMenu = document.getElementById('nav-menu')
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// klik diluar hamburger
const wrapper = document.querySelector('.hamburger-wrapper')
window.addEventListener('click', (e) => {
    if(! wrapper.contains(e.target) && ! hamburger.contains(e.target)) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    } 
})

// dark-mode
const darkMode = document.getElementById('dark-toggle')
const html = document.querySelector('html')
darkMode.addEventListener('click', () => {
    if(darkMode.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// tetapkan posisi toggle ketika dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkMode.checked = true;
  } else {
    darkMode.checked = false;
  }