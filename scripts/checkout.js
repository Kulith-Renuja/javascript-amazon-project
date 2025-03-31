// main idea of javascript
//1 save the data
//2 generate the html
//3 make it interactive

import { cart, removeFromCart,updateDeliveryOption } from '../data/cart.js'
import { products } from '../data/products.js';
import { formatCurrency } from '../utility/money.js';
import dayjs from'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
// dont use {} these above import beacuse dayjs is defult export in that file 
// we can define has - Export defualt dayjs(...) in that file
import {deliveryOption } from '../data/deliveryOption.js';

let cartsummeryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingproduct ;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingproduct = product;
        }
    });
    //console.log(matchingproduct);
    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption2;

    deliveryOption.forEach((option) => {
        if (option.id === deliveryOptionId){
            deliveryOption2 = option ;
        }
    });

    const today = dayjs();
    const deliveryDate = today.add(
        deliveryOption.deliverydays,'days'
    );
    const dateString = deliveryDate.format(
        'dddd, MMMM D'
    );

    cartsummeryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingproduct.image}">

            <div class="cart-item-details">
                <div class="product-name">
                    ${matchingproduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                    Update
                    </span>
                    <span class="delete-quantity-link link-primary" data-product-id="${matchingproduct.id}">
                    Delete
                    </span>
                </div>
            </div>
            <div class="delivery-options >
                <div class="delivery-options-title">
                    Choose a delivery option:
                    ${deliveryOptionHTML(matchingproduct,cartItem)}
                </div>
                
            </div>
        </div>
    </div>
    `;
});

//console.log(cartsummeryHTML);

// now repacing these html on checkout page

document.querySelector('.js-order-summary').innerHTML = cartsummeryHTML;

// when delete  1. remove the product from cart 2.update the HTML
document.querySelectorAll('.delete-quantity-link').forEach((link) => {
    link.addEventListener('click', () => {
        //console.log('delete');
        const productId = link.dataset.productId;
        //console.log(productId);
        removeFromCart(productId);
        //console.log(cart);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        //console.log(container);
        container.remove();
    });
});

//hello(); //loding js file from internet
// we can use external libraries like above

// let's load compressed js code to load faster through internet this compression called minification

console.log(dayjs()); //loding js file from internet
// use to these external libararies they have provided documentation how to use it 

const today=dayjs();
const deliveryDate = today.add(7,'days');
//console.log(deliveryDate);
console.log(deliveryDate.format('dddd MMMM D'));

// best pratices of programming - when we need somthing complicated - try to find the external library first before write the code 

//using library is can be compite with our veribale the for we want to use as modules  it's call ESM version - EcamScipt Module

// lets import the ESM version of hello  js
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
// hello();

function deliveryOptionHTML(matchingproduct,cartItem) {
    let HTML = '';
    deliveryOption.forEach((deliveryOption)=>{
        const today = dayjs();
        const deliveryDate = today.add(
            deliveryOption.deliverydays,'days'
        );
        const dateString = deliveryDate.format(
            'dddd, MMMM D'
        );
        const priceSting = deliveryOption.priceCents===0
        ?'FREE'
        :`$${formatCurrency(deliveryOption.priceCents)} -`;
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId
        HTML += `
        
            <div class="delivery-option" js-delivery-option" data-product-id="${matchingproduct.id}" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio" ${isChecked ?'checked' :''} 
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.productId}">
                <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceSting} Shipping
                    </div>
                </div>
            </div>
        
        `
    });

    return HTML;
}

document.querySelectorAll('.js-delivery-option').forEach((element) =>{
    element.addEventListener('click',()=>{
        const {productId,deliveryOptionId}= element.dataset;
        updateDeliveryOption(productId,deliveryOptionId);
    })
});