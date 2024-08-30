/*
list = [];
carro1 = {};
carro1.motor = 2.0;
carro1.tanque = 53;
carro1.cor = "vermelho";
carro1.km = 100000;

//console.log(carro1);
list.push(carro1);
list.forEach(element => {
    console.log(JSON.stringify(element));    
});
console.log(list[0]);
*/

let productName = "Carro";
let productDescription = "Veículo";
let productPrice = "40000";

let price = parseFloat(productPrice);

// Lista de objetos produtos
let data = [];

function Product(productName, productDescription, price){
    this.pName = productName;
    this.pDescription = productDescription;
    this.pPrice = price;
}

function addProduct(product){
    data.push(product);
    data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    //showProducts();
    show(data);
}

function show(data1){
    let element;
    for (let index = 0; index < data1.length; index++) {
        element = data1[index];
        console.log(element);
    }
}
let product = new Product(productName, productDescription, price);
addProduct(product);
