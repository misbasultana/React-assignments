const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const avocadoPrice = products.find( e =>{
    if(e.product === "avocado")
    return e.price;
});
console.log(avocadoPrice.price);