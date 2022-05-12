const parallax = document.querySelector('.parallax__wrapper')

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset

    parallax.style.backgroundPositionY = offset * 0.7 + "px"
})

const texts = ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS']
let count = 0
let index = 0
let currentText = ''
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".dynamic").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 100)
})();