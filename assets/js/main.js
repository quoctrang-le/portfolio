const parallax = document.querySelector('.parallax__wrapper')
const show__header = document.querySelector('.header__nav')
const navbar__item__active = document.querySelectorAll('.navbar__item')
const sections = document.querySelectorAll('.section')
let header = document.getElementById('header')
let nav = document.getElementById('header__nav')
window.addEventListener('scroll', function () {
  // start display header
  if (pageYOffset > 200) {
    header.classList.add('header__active')
    nav.classList.add('header__nav__active')
  } else {
    header.classList.remove('header__active')
    nav.classList.remove('header__nav__active')
  }
  // end display header

  // parallax effect
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset * 0.5 + 'px'
  if (pageYOffset > 200) {
    show__header.classList.add('show__header')
    show__header.parentElement.style.position = 'fixed'
  } else {
    show__header.classList.remove('show__header')
  }
  // end

  // display where the user stay
  let current = '' //which section we are in
  sections.forEach((section, i) => {
    const sectionHeight = section.clientHeight // height of element
    const sectionTop = section.offsetTop //distant from top to element
    if (this.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id')
    }
  })
  navbar__item__active.forEach((item) => {
    item.classList.remove('navbar__item__active')
    if (item.getAttribute('scroll') == current) {
      item.classList.add('navbar__item__active')
    }
  })
  // end

  //display button move to top
  if (pageYOffset > 300)
    document.querySelector('.moveTop').style.display = 'flex'
  else {
    document.querySelector('.moveTop').style.display = 'none'
  }
  //end
})

// start text typing
const texts = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS']
let count = 0
let index = 0
let currentText = ''
let letter = ''

;(function type() {
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
// end text typing

// start count up
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
// end count up

// preload
const pre = document.getElementById('preload')
const preload__item = document.querySelectorAll('.preload__item')

function preloader() {
  setTimeout(() => {
    preload__item.forEach((item) => (item.style.height = 0 + '%'))
    pre.style.opacity = 1
  }, 1600)
  setTimeout(() => {
    pre.style.display = 'none'
    pre.style.opacity = 0
  }, 2000)
}
preloader()
// preload

// start filter section
const lists = document.querySelectorAll('.list')
const items = document.querySelectorAll('.itemBox')
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', function () {
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
// end filter section
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

//move top button
const moveTop = document.querySelector('.moveTop')
moveTop.addEventListener('click', () => {
  window.scrollTo({ top: 0 })
})
//end

//start cursor effect
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
//end

const itemCountUps = document.querySelectorAll('.itemCountUp')
itemCountUps.forEach((count) => {
  count.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
    cursor.classList.add('cursorWhite')
  })

  count.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
    cursor.classList.remove('cursorWhite')
  })
})

document.querySelector('.blog__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

document.querySelector('.contact__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

document.querySelector('.footer__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
    cursor.classList.add('cursorWhite')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
    cursor.classList.remove('cursorWhite')
  })
})

document.querySelector('.introduce__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
    cursor.classList.add('cursorWhite')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
    cursor.classList.remove('cursorWhite')
  })
})

document.querySelector('.works__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

document.querySelector('.services__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

document.querySelector('.parallax__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
    cursor.classList.add('cursorWhite')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
    cursor.classList.remove('cursorWhite')
  })
})

document.querySelector('.about__wrapper').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

document.querySelector('.header').childNodes.forEach((child) => {
  child.addEventListener('mouseover', () => {
    cursor.classList.add('cursor2')
  })
  child.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor2')
  })
})

// start darkmode
const darkmod__btn__light = document.querySelector('.darkmode__btn-light')
const darkmod__btn__dark = document.querySelector('.darkmode__btn-dark')
const body = document.querySelector('.body')

darkmod__btn__dark.addEventListener('click', () => {
  body.classList.add('darkmode')
  darkmod__btn__dark.style.opacity = 1
  darkmod__btn__light.style.opacity = 0.3
})
darkmod__btn__light.addEventListener('click', () => {
  body.classList.remove('darkmode')
  darkmod__btn__dark.style.opacity = 0.3
  darkmod__btn__light.style.opacity = 1
})
//end darkmode
