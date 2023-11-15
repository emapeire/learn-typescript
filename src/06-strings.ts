(()=>{
  let productTitle:string = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription:string = 'Description about my product';
  console.log('productDescription', productDescription);

  let productPrice:number = 100;
  let isNew:boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);
})();
