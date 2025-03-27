console.log('amozon.js loaded');
// for show product details we create the array of prduct list and list have the obejct of product details
const products = [{
    img : "images/products/athletic-cotton-socks-6-pairs.jpg",
    name : 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    ratings : {
        stars : 4.5,
        count : 87
    },
    price : 1090
},{
    img : "images/products/intermediate-composite-basketball.jpg",
    name : 'Intermediate Size Basketball',
    ratings : {
        stars : 4,
        count : 127
    },
    price : 2095
},{
    img : "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name : 'Adults Plain Cotton T-Shirt - 2 Pack',
    ratings : {
        stars : 4.5,
        count : 56
    },
    price : 799
}];

let productHTML = '';

products.forEach((products) => {
    //console.log(product);
    //const html = 
    productHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.img}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.ratings.stars*10}.png">
            <div class="product-rating-count link-primary">
                ${products.ratings.count} 
            </div>
          </div>

          <div class="product-price">
            $${products.price/100}
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

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
    `;
    //console.log(html);
    //console.log(productHTML);
    
    // now we need to add the productHTML to the DOM this products catainin in product-grid element in the amazon.html
});

