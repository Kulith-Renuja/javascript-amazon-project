import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js'; // import the products data from the products.js file

console.log('amozon.js loaded');
// for show product details we create the array of prduct list and list have the obejct of product details



let productHTML = '';

products.forEach((products) => {
    //console.log(product);
    //const html = ''; // Placeholder for additional logic if needed
    productHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
                ${products.rating.count} 
            </div>
          </div>

          <div class="product-price">
            $${(products.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id="${products.id}" >
            Add to Cart
          </button>
        </div>
    `;
    //console.log(html);
    //console.log(productHTML);
    
    // now we need to add the productHTML to the DOM this products catainin in product-grid element in the amazon.html
});

document.querySelector('.products-grid').innerHTML = productHTML;

function updateCartQuantity() {
  let cartquntity = 0;

  cart.forEach((cartItem) => {
      cartquntity += cartItem.quantity;
  });
  console.log(cartquntity);
  document.querySelector('.js-cart-quntity').innerHTML = cartquntity;
}

// now we need to add the event listener to the add to cart button
// so we need to select the add to cart button and add the event listener to it
document.querySelectorAll('.add-to-cart-button').forEach((button, index) => {
    button.addEventListener('click', () => {
        //console.log(`Add to cart button clicked for product at index ${index}`);
        // adding data attribute to the button
        // syntax for data attribute is data-<name>="value"
        // should start with data- and then the name of the attribute 

        //console.log(button.dataset);
        //console.log(button.dataset.productName);
        const productId = button.dataset.productId;
        //console.log(productName);

        addToCart(productId);
        updateCartQuantity();
        //console.log(cart);


    });
});