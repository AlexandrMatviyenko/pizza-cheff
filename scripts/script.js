new WOW({
    animateClass: 'animate__animated'
}).init();

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.product__image').magnificPopup({
    type:'image',
});

$('h1').html = 'Самая крутая пицца ждет <span class="double-title__span">только в нашем ресторане</span>';

$('products__title').css('color', '#000000');

$('.btn:not(#no-touch)').css({
    backgroundColor: 'transparent',
    border: '1px solid rgb(255, 175, 24)',
    color: 'rgb(255, 175, 24)'
})

let productInput = $('#product-input');
productInput.attr('placeholder', 'Имя');

$('.footer__rights span').text((new Date()).getFullYear());

let products = $('.product');
for (let i = 0; i < products.length; i++) {
    if (i % 2 === 1) {
        let element = products.eq(i).children().eq(1);
        element.text(element.text() + '*');
    }
}

$('#choose__pizza').click(function () {
    $('.products')[0].scrollIntoView({behavior: 'smooth'});
});

$('.btn-add-to-cart').click((e) => {
    productInput.val($(e.target).parents('.product').find('.product__title').text());
    $('.order')[0].scrollIntoView({behavior: 'smooth'});
});

let phoneInput = $('#phone-input');
$(phoneInput).inputmask({"mask": "(999) 999-9999"});

$('#create-order').click(function () {
    let addressInput = $('#address-input');
    if (!productInput.val()) {
        alert('Заполните поле пицца');
        return;
    }
    if (!productInput.val()) {
        alert('Заполните поле пицца');
        return;
    }
    if (!addressInput.val()) {
        alert('Заполните поле с адресом');
        return;
    }
    if (!phoneInput.val()) {
        alert('Заполните поле с телефоном');
        return;
    }

    alert('Спасибо за заказ!');
});

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})
