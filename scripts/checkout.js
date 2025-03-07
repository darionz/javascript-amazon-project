import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';


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
