const parallax = document.querySelector('.parallax__wrapper')
const show__header = document.querySelector('.header__nav')

const navbar__item__active = document.querySelectorAll('.navbar__item')
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset
    parallax.style.backgroundPositionY = offset * 0.7 + 'px'
    if (pageYOffset > 200) {
        show__header.classList.add('show__header')
        show__header.parentElement.style.position = 'fixed'
    } else {
        show__header.classList.remove('show__header')
    }
})

navbar__item__active.forEach((item) => {
    item.querySelector('.navbar__item__active').classList.remove('navbar__item__active')
    item.addEventListener('click', () => {

        item.classList.add('navbar__item__active')
    })
})

const texts = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS']
let count = 0
let index = 0
let currentText = ''
let letter = ''

;
(function type() {
    if (count === texts.length) {
        count = 0
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
    document.querySelector('.dynamic').textContent = letter
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    setTimeout(type, 200)
})()

const counters = document.querySelectorAll('.countUp')

counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target') // value count to
        const value = +counter.innerText // current value
        const increment = 1 // how fast is nubmer increment

        if (value < target) {
            counter.innerText = `${Math.ceil(value + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 2000) updateCounter()
    })
})

const pre = document.getElementById('preload')

function preloader() {
    setTimeout(() => {
        pre.style.display = 'none'
    }, 2000)
}
preloader()

const lists = document.querySelectorAll('.list')
const items = document.querySelectorAll('.itemBox')

for (let i = 0; i < lists.length; i++) {
    lists[i].addEventListener('click', function() {
        for (let j = 0; j < lists.length; j++) {
            lists[j].classList.remove('active')
        }
        this.classList.add('active')

        let dataFilter = this.getAttribute('data-filter')
        for (let k = 0; k < items.length; k++) {
            items[k].classList.remove('show')
            items[k].classList.add('hide')

            if (
                items[k].getAttribute('data-item') == dataFilter ||
                dataFilter == 'all'
            ) {
                items[k].classList.remove('hide')
                items[k].classList.add('show')
            }
        }
    })
}

let header = document.getElementById('header')
let nav = document.getElementById('header__nav')

window.addEventListener('scroll', () => {
    if (pageYOffset > 200) {
        header.classList.add('header__active')
        nav.classList.add('header__nav__active')
    } else {
        header.classList.remove('header__active')
        nav.classList.remove('header__nav__active')
    }
})

window.addEventListener('scroll', () => {
    if (pageYOffset > 300)
        document.querySelector('.moveTop').style.display = 'flex'
    else {
        document.querySelector('.moveTop').style.display = 'none'
    }
})

const closebutton = document.querySelector('.close')
const hamburgur = document.querySelector('.hamburgur')
const modelNavbarLink = document.querySelectorAll('.model__navbar__link')
const modelNavbar = document.querySelector('.model__navbar')

closebutton.addEventListener('click', () => {
    modelNavbar.style.display = 'none'
})

hamburgur.addEventListener('click', () => {
    modelNavbar.style.display = 'flex'
})

modelNavbarLink.forEach((i) =>
    i.addEventListener('click', () => {
        modelNavbar.style.display = 'none'
    })
)

const moveTop = document.querySelector('.moveTop')

moveTop.addEventListener('click', () => {
    window.scrollTo({ top: 0 })
})

const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY
    cursor.style.top = y + 'px'
    cursor.style.left = x + 'px'
    cursor.style.display = 'block'
})

window.addEventListener('mouseout', () => {
    cursor.style.display = 'none'
})

const itemCountUps = document.querySelectorAll('.itemCountUp')

itemCountUps.forEach(count => {
    count.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')
        cursor.classList.add('cursorWhite')

    })

    count.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')
        cursor.classList.remove('cursorWhite')
    })
})




document.querySelector('.blog__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')

    })
})

document.querySelector('.contact__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')
    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')
    })
})

document.querySelector('.footer__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')
        cursor.classList.add('cursorWhite')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')
        cursor.classList.remove('cursorWhite')

    })
})

document.querySelector('.introduce__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')
        cursor.classList.add('cursorWhite')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')
        cursor.classList.remove('cursorWhite')

    })
})

document.querySelector('.works__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')

    })
})

document.querySelector('.services__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')


    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')


    })
})

document.querySelector('.parallax__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')
        cursor.classList.add('cursorWhite')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')
        cursor.classList.remove('cursorWhite')

    })
})

document.querySelector('.about__wrapper').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')


    })
})

document.querySelector('.header').childNodes.forEach(child => {
    child.addEventListener('mouseover', () => {
        cursor.classList.add('cursor2')

    })
    child.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor2')

    })
})