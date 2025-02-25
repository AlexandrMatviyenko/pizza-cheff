document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждет <span class="double-title__span">только в нашем ресторане</span>';

document.getElementById('products__title').style.color = 'black';

let buttonElements = document.querySelectorAll('.btn');
buttonElements.forEach((item) => {
    if (item.id === 'no-touch') {
        return;
    }
    item.style.backgroundColor = 'transparent';
    item.style.border = '1px solid rgb(255, 175, 24)';
    item.style.color = 'rgb(255, 175, 24)';
})

// let buttonElements = document.getElementsByClassName('btn');
// for (let i = 0; i < buttonElements.length; i++) {
//     if (buttonElements[i].id === 'no-touch') {
//         continue;
//     }
//     buttonElements[i].style.backgroundColor = 'transparent';
//     buttonElements[i].style.border = '1px solid rgb(255, 175, 24)';
//     buttonElements[i].style.color = 'rgb(255, 175, 24)';
// }

document.getElementById('name-input').setAttribute('placeholder', 'Имя');

document.querySelector('.footer_rights span').innerText = (new Date()).getFullYear();

let products = document.getElementsByClassName('product');
for (let i = 0; i < products.length; i++) {
    if (i % 2 === 1) {
        products[i].children[1].innerText += '*';
    }
}

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})