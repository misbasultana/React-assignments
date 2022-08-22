const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
let tp = 0;
products.forEach(element => {
    if(typeof element.price === "number")
    tp += element.price;
});
console.log(tp);