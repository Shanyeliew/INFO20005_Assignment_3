var addButton = document.querySelector('.product-button');
var addButtonCard = document.getElementsByClassName('product-card-button');
var popUp = document.querySelector('.added-cart-popup');
var continueShopping = document.querySelector('.continue-shopping');

var cartOverlay = document.getElementById('cart-overlay');
var cart = document.getElementById('cart-container');
var cartButton = document.querySelector('#cart');
var closeCartButton = document.getElementById('close');

//Handle to cart overlay

cartButton.addEventListener('click', function() {
    
    cartOverlay.style.right = '0';
    cart.style.right = '0';
    console.log('clicked');
});

closeCartButton.addEventListener('click', function() {
    cart.style.right = '-100%';
    cartOverlay.style.right = '-100%';
    console.log('clicked');
});

function openCart() {
    cart.style.right = '0';
    cartOverlay.style.right = '0';
}

//Handle the added-to-cart popup
if(window.location.href.indexOf('product_1.html') > -1 || window.location.href.indexOf('product_2.html') > -1) {
    addButton.addEventListener('click', function() {
        popUp.classList.add('show');
        console.log('clicked');
    });
    
    continueShopping.addEventListener('click', function() {
        popUp.classList.remove('show');
    });
    
}

if(window.location.href.indexOf('product_list.html') > -1) {
    for (var i = 0; i < addButtonCard.length; i++) {
        addButtonCard[i].addEventListener('click', function() {
            popUp.classList.add('show');
            console.log('clicked');
        });
    }

    for (var i = 0; i < addButtonCard.length; i++) {
        continueShopping.addEventListener('click', function() {
            popUp.classList.remove('show');
        });
    }
}



