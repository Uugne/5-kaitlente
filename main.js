const selector = '.kaitlente';
const DOM = document.querySelector(selector);
const padeliaiDOM = DOM.querySelector('.padeliai');
const mygtukaiDOM = DOM.querySelector('.mygtukai');

const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];

let HTML = '';

for (let i = 0; i < symbols.length; i++) {
    HTML += `<div class = "hot" data-symbol = "${symbols[i]}"></div>`
}

DOM.insertAdjacentHTML('beforeend', HTML);

const buttons = DOM.querySelectorAll('.hot');

console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];

btn.addEventListener('click', function () {
    btn.classList.toggle('red');
});
}




