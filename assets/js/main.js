const parallax = document.querySelector('.parallax__wrapper')

window.addEventListener('scroll', function () {
  let offset = window.pageYOffset

  parallax.style.backgroundPositionY = offset * 0.7 + 'px'
})

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
  setTimeout(type, 100)
})()

const counters = document.querySelectorAll('.countUp')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = counter.getAttribute('data-target') // value count to
    const value = +counter.innerText // current value
    const increment = target / 300 // how fast is nubmer increment

    if (value < target) {
      counter.innerText = `${Math.ceil(value + increment)}`
      setTimeout(updateCounter, 2)
    } else {
      counter.innerText = target
    }
  }
  window.addEventListener('scroll', () => {
    if (pageYOffset >= 1750 && pageYOffset <= 1800) updateCounter()
  })
})
