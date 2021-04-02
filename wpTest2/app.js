const btn1 = document.querySelector('#btn1');
const cont1 = document.querySelector('.main-cont-1');
const cont2 = document.querySelector('.main-cont-2');

btn1.addEventListener('click', DNMode);

function DNMode() {
    cont1.classList.toggle('cont-1-bgcolor');
    cont2.classList.toggle('cont-2-bgcolor');
    btn1.classList.toggle('btn-bgcolor');
}