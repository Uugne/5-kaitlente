const selector = '.kaitlente';
let DOM = document.querySelector(selector);

const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];

let HTML = '';

for (let i = 0; i < symbols.length; i++) {
    HTML += `<div class = "hot" data-symbol = "${symbols[i]}"></div>`
}

DOM.insertAdjacentHTML('beforeend', HTML);

let buttons = DOM.querySelectorAll('.hot');

for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];

    buttons[4].addEventListener('click', function () {
    buttons[0].classList.add('red')}
    )
}






