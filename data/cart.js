export const cart = [];
export function addToCart(productId) {
    let machingProduct;
    cart.forEach((product) => {
        if (product.productId === productId) {
            machingProduct = product;
        }
    });
    if (machingProduct) {
        machingProduct.quantity++;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
  }