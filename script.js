'use strict';

const card = document.getElementById('kart');
const wallet = document.getElementById('wallet');
const left = document.getElementById('leftSpan');

wallet.addEventListener('click', () => {
    card.style.transform = 'translateX(97%)';
})

left.addEventListener('click', () => {
    card.style.transform = 'translateX(1%)';
});


