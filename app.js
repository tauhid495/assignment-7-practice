// let see = confirm('Do you want to see web location?');
// if (see == true) {
//     alert('your web ' + location.href);
// }


const myTimeout = setTimeout(mygreeting, 3500);
function mygreeting() {
    document.getElementById('greeting').innerHTML = "Welcome To Shopping Cart"
}

// // function myprom() {
// let input = prompt('please enter your age', '25');
// if (input != null) {
//     let inputValue = parseInt(input) + 200;
//     alert('Your Serial Is ' + inputValue);
// }

// add item function

const displayLoacalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    // display in ul
    displayProduct(name);

    // add to local storage 
    addProductToCart(name);
    //clear field
    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

//place order
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLoacalStorageCart();