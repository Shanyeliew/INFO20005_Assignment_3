var addButton = document.querySelector('.product-button');
var addButtonCard = document.getElementsByClassName('product-card-button');
var popUp = document.querySelector('.added-cart-popup');
var continueShopping = document.querySelector('.continue-shopping');

var cartOverlay = document.getElementById('cart-overlay');
var cart = document.getElementById('cart-container');
var cartButton = document.getElementById('cart');
var closeCartButton = document.getElementById('close');
var cartCount = document.getElementById('cart-count');
var backHome = document.getElementById('back-home-button');
var count = 0;

//Handle to cart overlay

cartButton.addEventListener('click', function() {
    cart.style.right = '0';
    cartOverlay.style.right = '0';
});

closeCartButton.addEventListener('click', function() {
    cart.style.right = '-100%';
    cartOverlay.style.right = '-100%';
});


//Handle the added-to-cart popup
if(window.location.href.indexOf('product_1.html') > -1 || window.location.href.indexOf('product_2.html') > -1) {
    addButton.addEventListener('click', function() {
        popUp.classList.add('show');

        //increase cart count
        count++;
        localStorage.setItem('cartCount', count);
        cartCount.textContent = count;
    });
    
    continueShopping.addEventListener('click', function() {
        popUp.classList.remove('show');
    });
    
}

if(window.location.href.indexOf('product_list.html') > -1) {
    for (var i = 0; i < addButtonCard.length; i++) {
        addButtonCard[i].addEventListener('click', function() {
            popUp.classList.add('show');
            
            //increase cart count
            count++;
            localStorage.setItem('cartCount', count);
            cartCount.textContent = count;
        });
    }

    for (var i = 0; i < addButtonCard.length; i++) {
        continueShopping.addEventListener('click', function() {
            popUp.classList.remove('show');
        });
    }
}

// reset cart count after payment is confirmed
if(window.location.href.indexOf('confirmation.html') > -1) {
    backHome.addEventListener('click', function() {
        count = 0;
        localStorage.setItem('cartCount', count);   
        cartCount.textContent = count;
    });
}

// When the page loads, get the count from localStorage and display it
window.onload = function() {
    var savedCount = localStorage.getItem('cartCount');
    if (savedCount) {
        count = Number(savedCount); // Convert the saved count to a number
        cartCount.textContent = count;
    }

    //show the cart count badge only if there are items in the cart
    if (count > 0) {
        cartCount.style.display = 'inline-flex';
    } else {
        cartCount.style.display = 'none';
    }
}