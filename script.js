//variables for the added-to-cart popup
var addButton = document.querySelector('.product-button');
var addButtonCard = document.getElementsByClassName('product-card-button');
var popUp = document.querySelector('.added-cart-popup');
var continueShopping = document.querySelector('.continue-shopping');

//variables for the cart overlay
var cartOverlay = document.getElementById('cart-overlay');
var cart = document.getElementById('cart-container');
var cartButton = document.getElementById('cart');
var closeCartButton = document.getElementById('close');
var cartCount = document.getElementById('cart-count');
var backHome = document.getElementById('back-home-button');
var item1 = document.getElementById('item-1');
var item2 = document.getElementById('item-2');
var checkoutDetails = document.getElementById('checkout-details');
var emptyCart = document.getElementById('empty');
var count = 0;

//variables for the checkout form validation
var confirmPayment = document.querySelectorAll('.confirm-payment-btn');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var contactNumber = document.getElementById('contact-number');
var address = document.getElementById('address');
var town = document.getElementById('town');
var state = document.getElementById('state');
var postalCode = document.getElementById('postal-code');
var cardNumber = document.getElementById('card-number');
var expiryDate = document.getElementById('expiry-date');
var cvv = document.getElementById('cvv');

//variables for the error messages
var invalidFeedback = document.querySelectorAll('.invalid-feedback');
var firstNameError = document.getElementById('first-name-error');
var lastNameError = document.getElementById('last-name-error');
var emailError = document.getElementById('email-error');
var contactNumberError = document.getElementById('contact-number-error');
var addressError = document.getElementById('address-error');
var townError = document.getElementById('town-error');
var stateError = document.getElementById('state-error');
var postalCodeError = document.getElementById('postal-code-error');
var cardNumberError = document.getElementById('card-number-error');
var expiryDateError = document.getElementById('expiry-date-error');
var cvvError = document.getElementById('cvv-error');

//variables for search bar dropdown
var search = document.getElementById('search');
var dropdown = document.querySelector('.dropdown');

//variables for the search bar dordown in mobile view
var searchMobile = document.getElementById('search-mobile');
var dropdownMobile = document.querySelector('.dropdown-mobile');
var exit = document.querySelector('.exit-zone');

if(window.location.href.indexOf('product_1.html') > -1 || window.location.href.indexOf('product_2.html') > -1
|| window.location.href.indexOf('product_list.html') > -1 || window.location.href.indexOf('index.html') > -1) {
    
    //Handle the cart overlay
    //open the cart overlay
    cartButton.addEventListener('click', function() {
        cart.style.right = '0%';
        cartOverlay.style.right = '0';
    });

    //close the cart overlay
    closeCartButton.addEventListener('click', function() {
        cart.style.right = '-100%';
        cartOverlay.style.right = '-100%';
    });
    
    //add items to the cart
    var savedCount = localStorage.getItem('cartCount');
    if(savedCount) {
        if (Number(savedCount) == 0) {
            item1.style.display = 'none';
            item2.style.display = 'none'; 
            checkoutDetails.style.display = 'none';
            emptyCart.style.display = 'flex';
        }

        if(Number(savedCount) >= 1) {
            item1.style.display = 'flex';
            checkoutDetails.style.display = 'flex';
            emptyCart.style.display = 'none';
        }  
        
        if(Number(savedCount) >= 2) {
            item2.style.display = 'flex';
        }
    }

    //Handle the search bar dropdown
    search.addEventListener('focus', function() {
        dropdown.style.display = 'flex';
    });

    window.addEventListener('click', function(event) {
        if (event.target !== search) {
            dropdown.style.display = 'none';
        }
    });

    //Handle the search bar dropdown in mobile view
    searchMobile.addEventListener('click', function() {
        dropdownMobile.style.top = '0';
    });
    exit.addEventListener('click', function() {
        dropdownMobile.style.top = '-100%';
    });
}

//Handle the added-to-cart popup
if(window.location.href.indexOf('product_1.html') > -1 || window.location.href.indexOf('product_2.html') > -1) {
    
    //open the popup
    addButton.addEventListener('click', function() {
        popUp.classList.add('show');

        //increase cart count
        count++;
        localStorage.setItem('cartCount', count);
        cartCount.textContent = count;
    });
    
    //close the popup
    continueShopping.addEventListener('click', function() {
        popUp.classList.remove('show');
    });
    
}

if(window.location.href.indexOf('product_list.html') > -1) {

    //open the popup
    for (var i = 0; i < addButtonCard.length; i++) {
        addButtonCard[i].addEventListener('click', function() {
            popUp.classList.add('show');
            
            //increase cart count
            count++;
            localStorage.setItem('cartCount', count);
            cartCount.textContent = count;
        });
    }

    //close the popup
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

        //go back to the home page
        window.location.href = 'index.html';
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

//Form validation
if(window.location.href.indexOf('checkout.html') > -1) {
    var invalidCount = 0;
    for (var i = 0; i < confirmPayment.length; i++) {
        confirmPayment[i].addEventListener('click', function() {
            //clear all error messages
            for (var i = 0; i < invalidFeedback.length; i++) {
                invalidFeedback[i].textContent = '';
            }
    
            //validate form fields
            if(firstName.value === '') {
                firstNameError.textContent = 'Please enter a valid first name';
                invalidCount++;
            }
            if(lastName.value === '') {
                lastNameError.textContent = 'Please enter a valid last name';
                invalidCount++;
            }
            if(email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
                emailError.textContent = 'Please enter a valid email';
                invalidCount++;
            }
            if(contactNumber.value === '' || isNaN(contactNumber.value) || contactNumber.value.length < 10 
            || contactNumber.value.length > 10 || contactNumber.value.charAt(0) !== '0'){
                contactNumberError.textContent = 'Please enter a valid contact number';
                invalidCount++;
            }
            if(address.value === '') {
                addressError.textContent = 'Please enter a valid address';
                invalidCount++;
            }
            if(town.value === '') {
                townError.textContent = 'Please enter a valid town';
                invalidCount++;
            }
            if(state.value === '' || state.value.length > 3 || state.value.length < 3 
            || state.value !== state.value.toUpperCase()) {
                stateError.textContent = 'Please enter a valid state';
                invalidCount++;
            }
            if(postalCode.value === '' || isNaN(postalCode.value) || postalCode.value.length < 4 
            || postalCode.value.length > 4){
                postalCodeError.textContent = 'Please enter a valid postal code';
                invalidCount++;
            }
            if(cardNumber.value === '' || cardNumber.value.length < 19 || cardNumber.value.length > 19 
            || cardNumber.value.charAt(4) !== '-' || cardNumber.value.charAt(9) !== '-' || cardNumber.value.charAt(14) !== '-'){
                cardNumberError.textContent = 'Please enter a valid card number';
                invalidCount++;
            }
            if(expiryDate.value === '' || expiryDate.value.length < 5 || expiryDate.value.length > 5 
            || expiryDate.value.charAt(2) !== '/' || (expiryDate.value.charAt(0) !== '0' && expiryDate.value.charAt(0) !== '1') 
            || (expiryDate.value.charAt(0) == '1' && expiryDate.value.charAt(1) !== '1' && expiryDate.value.charAt(1) !== '2')){
                expiryDateError.textContent = 'Please enter a valid expiry date';
                invalidCount++;
            }
            if(cvv.value === '' || isNaN(cvv.value) || cvv.value.length < 3 || cvv.value.length > 3){
                cvvError.textContent = 'Please enter a valid cvv';
                invalidCount++;
            }

            //redirect to confirmation page if all fields are valid
            if(invalidCount === 0) {
                window.location.href = 'confirmation.html';
            }

            //reset invalid count
            invalidCount = 0;
        });
    }
}