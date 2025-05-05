/*
we can use it like a class this is OOp concept
class = object generator
class name should be capitalized
extra feaures in class - constructor, this, inheritance, encapsulation, polymorphism
constructor = function that run when we create a new object from the class
              constructor should not return anything

in object = ... : value , ... 
in class  ... = value ; 
*/

class Cart {
    //cartItem :undefined,
    //cartItem =undefined;
    cartItem;
    loadFromStorageKay;

    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey; // this is a class property
        this.loadFromStorage(); // load the cart from local storage
    }
 

    loadFromStorage() {   // short hand method syntax
        // cart.cartItem = JSON.parse(localStorage.getItem('cart'));
        //if use other name for object this code not longer work for solve the problem we use this. instead of cart
        this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey));

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
    }

    saveLocalStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));
    }

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
    }

    removeFromCart(productId) {
        const newcart = [];
        this.cartItem.forEach((product) => {
            if (product.productId !== productId) {
                newcart.push(product);
            }
        });
        this.cartItem = newcart;
    
        this.saveLocalStorage();
        }

    
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

}

/*

cart.loadFromStorage();
    
// generate a new cart object using the class
    //const userCart = Cart('userCartoop'); a
    const userCart = new Cart('userCartoop'); 
    //const businessCart = Cart(' businessCartoop');
    const businessCart = new Cart(' businessCartoop');

*/

/*
const cart = new Cart(); // create a new object from the class
const businessCart = new Cart(); // create a new object from the class

we can add a constructor to the class to run below code when we create a new object from the class
cart.localStorageKey = 'cart'; // this is a class property
businessCart.localStorageKey = 'businessCart'; // this is a class property

cart.loadFromStorage(); // load the cart from local storage
businessCart.loadFromStorage(); // load the cart from local storage

now we can edit call the function like this with parameter below
*/
const cart = new Cart('cart-OOP');
const businessCart = new Cart('cart-OOP-businessCart');

console.log(cart); // lest try to export this object to other file in checkout
console.log(cart.cartItem); // this will show the cart items in the console
console.log(cart.cartItem[0].productId); // this will show the product id of the first item in the cart