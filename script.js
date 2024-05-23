//Handle the added-to-cart popup

var addButton = document.querySelector('.product-button');
var addButtonCard = document.getElementsByClassName('product-card-button');
var popUp = document.querySelector('.added-cart-popup');
var continueShopping = document.querySelector('.continue-shopping');

addButton.addEventListener('click', function() {
    popUp.classList.add('show');
});

for(var i = 0; i < addButtonCard.length; i++) {
    addButtonCard[i].addEventListener('click', function() {
        popUp.classList.add('show');
    });
}


continueShopping.addEventListener('click', function() {
    popUp.classList.remove('show');
});

Window.addEventListener('click', function(event) {
    if(event.target == popUp) {
        popUp.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.product-card-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            popUp.classList.add('show');
        });
    });
});
