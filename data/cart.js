export const cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2
    }
];

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