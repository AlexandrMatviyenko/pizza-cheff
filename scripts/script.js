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

document.getElementById('choose__pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: 'smooth'});
}

let productInput = document.getElementById('product-input');

let addToCartButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: 'smooth'});
    }
}

document.getElementById('create-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Заполните поле пицца');
        return;
    }
    if (!productInput.value) {
        alert('Заполните поле пицца');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните поле с адресом');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните поле с телефоном');
        return;
    }

    alert('Спасибо за заказ!');
}

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