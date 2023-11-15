(()=>{
let prices = [1,2,3,4,5,6,7,8,9,'hello',true];
prices.push(10);
prices = [10,11,12];
prices.push('bye');
prices.push(false);

let products = ['hello', true];
products.push(false);

let mixed: (number | string | boolean | object)[] = ['hello', true];
mixed.push(12);
mixed.push('as');
mixed.push('true');
mixed.push([]);
mixed.push({});

let numbers = [1,2,3,4,5,6,7,8,9];
numbers.map(item => item*2);
})();
