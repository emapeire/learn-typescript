(()=> {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  productInStock = 11
  console.log('productInStock', productInStock);
  if(productInStock > 10) {
    console.log('is greater than');
  }

  let discount = parseInt('123');
  console.log('discount', discount);
  discount <= 200 ? console.log('apply') : console.log('not apply');

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b1010
  console.log('bin', bin);
})();
