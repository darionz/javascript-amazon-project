import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart, calculateCartQuantity } from "../data/cart.js";
//import '../data/cart-class.js';

async function loadPage() {
  await loadProductsFetch();

  await new Promise((resolve) =>{ 
    loadCart(() => {
      resolve();
    });
  });
  updateCartQuantity();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

export function updateCartQuantity() {
  let cartQuantity = calculateCartQuantity();
  document.querySelector('.js-cart-item-quantity').innerHTML = `${cartQuantity} items`;
}


/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) =>{
    loadCart(() => {
      resolve();
    })
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
new Promise((resolve) => {
  loadProductsFetch(() => {
    resolve();
  });
}).then(() => {
  renderOrderSummary()
  renderPaymentSummary()
});
*/
