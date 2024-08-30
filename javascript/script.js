// Variáveis do nome, descrição e preço do produto, pegando os dados do formulário 
let productName;
let productDescription;
let productPrice;

let price;
// Lista de objetos produtos
let data1 = [];

// Variável do botão
let inputButton = document.getElementById("input-button");

// Construtor dos objetos produtos
function Product(productName, productDescription, price){
    this.pName = productName;
    this.pDescription = productDescription;
    this.pPrice = price;
}

// Função para mostrar produtos
function show(data){
    let p1;
    let element;
    let div1 = document.getElementById("list");
    div1.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        element = data[index];
        p1 = document.createElement("p");
        node = document.createTextNode("Nome: " + element.pName + ", valor: " + element.pPrice);
        p1.append(node);
        div1.appendChild(p1);
    }
}

let product;

// Função que adiciona os produtos na lista
function addProduct(){
    productName = document.getElementById("p-name").value;
    productDescription = document.getElementById("p-desc").value;
    productPrice = document.getElementById("p-price").value;
    price = parseFloat(productPrice);

    product = new Product(productName, productDescription, price);

    data1.push(product);
    data1.sort((a, b) => parseFloat(a.pPrice) - parseFloat(b.pPrice));
    //showProducts();
    show(data1);
}

// Evento de adicionar produtos à lista
inputButton.addEventListener("click", addProduct);




