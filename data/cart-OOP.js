const cart = {
    // export cart = undefined; we cannot use this inside a object
    // object 1
    cartItem :undefined,

    // object 2 function to object
    //export function loadFromStorage() { // we cannot use export inside a object
    //   loadFromStorage: function() {    // FUNCTION INSIDE OBJECT CALL AS METHOD
    loadFromStorage() {   // short hand method syntax
        // cart.cartItem = JSON.parse(localStorage.getItem('cart'));
        //if use other name for object this code not longer work for solve the problem we use this. instead of cart
        this.cartItem = JSON.parse(localStorage.getItem('cart-oop'));

        if (!this.cartItem) {
            this.cartItem = [
                {
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 2,
                    deliveryOptionId :'1'

                },
                {
                    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity: 1,
                    deliveryOptionId :'2'

                }
            ];
        }
    },

    // object 3 function to object
    // save these in local storage
    saveLocalStorage() {
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItem));
    },
    /*
    },
    function saveLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    This is invalid inside an object because you're trying to declare a function declaration in an object without assigning it as a property.

    JavaScript objects must have key-value pairs, like this:
    key: value
    But function saveLocalStorage() { ... } is not a value by itself unless you assign it to a key.

    Correct way to write a method inside an object:
    // saveLocalStorage: function() { below is sort form
    saveLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    */

    // object 4 function to object
    addToCart(productId) {
    let machingProduct;
    this.cartItem.forEach((product) => {
        if (product.productId === productId) {
            machingProduct = product;
        }
    });
    if (machingProduct) {
        machingProduct.quantity++;
    } else {
        this.cartItem.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId :'1'
        });
    }
    this.saveLocalStorage();
  },

    // object 5 function to object
    removeFromCart(productId) {
        const newcart = [];
        this.cartItem.forEach((product) => {
            if (product.productId !== productId) {
                newcart.push(product);
            }
        });
        this.cartItem = newcart;
    
        this.saveLocalStorage();
        },

    // object 6 function to object
    updateDeliveryOption(productId,deliveryOptionId){
        let machingProduct;
        this.cartItem.forEach((product) => {
            if (product.productId === productId) {
                machingProduct = product;
            }
        });

        machingProduct.deliveryOptionId = deliveryOptionId;
        this.saveLocalStorage();
    }
};

cart.loadFromStorage();



// okay this is a object and we can use it like a class this is OOp concept
// OOP concept is try to represent real world object
// acually real world cart can have itehms and we can add items to cart and remove 
// in here also we have a cart and we can add items to the cart and remove items from the cart
//cart.addToCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
//console.log(cart); // lest try to export this object to other file in checkout

// easy to create multiple objects when using OOP concept - using this we can create other cart also lie bussiness cart and user cart only want to do copy and paste this code and change the name of the object and we can use it like a class or we can use it like a constructor function
// we can create a function and it should all word start with capital letter and copy and paste the above object,  when calling this function it will create a new object and we can use it like a class or we can use it like a constructor function
/*
function Cart() {
    const cart = {object code....};

    return cart;
}

now we can call by defferent name
const userCart = Cart();
const businessCart = Cart();

note - this object we using local storage when creating new object it will not create new local storage it will use the same local storage so we need to change the name of the local storage when creating new object
so we can add localStorageKey as a parameter to the function and we can use it like a class or we can use it like a constructor function
function Cart(localStorageKey) {
const cart = {object code.... localStorage.getItem(localStorageKey) like we want to chage the code};
    return cart;
}

now we can call by defferent name
const userCart = Cart('userCartoop' - give a name to local storage);
const businessCart = Cart(' businessCartoop');
    */


/*
this is jut a object and we can use it like a class this is OOp concept
class = object generator
we can leaarn this in cart-class,js file
*/
