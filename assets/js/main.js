const parallax = document.querySelector('.parallax__wrapper')

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset

    parallax.style.backgroundPositionY = offset * 0.7 + 'px'
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
    setTimeout(type, 100)
})()

const counters = document.querySelectorAll('.countUp')

counters.forEach((counter) => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target') // value count to
        const value = +counter.innerText // current value
        const increment = target / 500 // how fast is nubmer increment

        if (value < target) {
            counter.innerText = `${Math.ceil(value + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    window.addEventListener('scroll', () => {
        if (pageYOffset >= 2300) updateCounter()
    })
})

const pre = document.getElementById('preload')

function preloader() {
    setTimeout(() => {
        pre.style.display = 'none'
    }, 3000)
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
        console.log(dataFilter)
        for (let k = 0; k < items.length; k++) {
            items[k].classList.remove('show')
            items[k].classList.add('hide')

            if (items[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                console.log(items[k].getAttribute('data-item'))
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