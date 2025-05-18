function toggleMenu(isOpen) {
    const navBars = document.querySelector('.nav-bars')
    const navClose = document.querySelector('.nav-close')
    const navLinks = document.querySelector('.nav-links')

    navBars.classList.toggle('hidden', isOpen)
    navClose.classList.toggle('show', isOpen)
    navLinks.classList.toggle('show', isOpen)
}

function showSection(section){
    const html5 = document.querySelector('.html5')
    const css = document.querySelector('.css')
    const js = document.querySelector('.js')

    if(section === 'html'){
        css.classList.remove('show')
        html5.classList.remove('hidden')
        js.classList.remove('show')
    }else if(section === 'css'){
        html5.classList.add('hidden')
        js.classList.remove('show')
        css.classList.add('show')
    }else if(section === 'js'){
        html5.classList.add('hidden')
        css.classList.remove('show')
        js.classList.add('show')
    }
}