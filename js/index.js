// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');

  thePrice = price.innerText;
  theQuantity = quantity.value;

  let sum = thePrice * theQuantity;

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sum;
  return sum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const allProducts = document.querySelectorAll('.product');

  // ITERATION 2
  let num = 0;
  allProducts.forEach((product) => {
    num += updateSubtotal(product);
  });
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector(`#total-value span`);
  total.textContent = num;
}

// ITERATION 4

function removeProduct(event) {
  //const target = event.currentTarget;
  //console.log('The target in remove is:', target);
  //... your code goes here
  const target = event.currentTarget.parentNode.parentNode;
  target.parentNode.removeChild(target);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

window.addEventListener('load', () => {
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  });
});
