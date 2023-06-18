//* O que são Object Types?
/*
    São os dados que tem como o tipo objeto, por exemplo: object literals e arrays;
    Temos diversos recursos para explorar sobre estes  tipos;
    Como: Interfaces, readonly, tupla e outros;
    Isso nos dá possibilidades a mais para o JavaScript;
*/

//* 1. De tipo para interface - tipo de objeto para função co interface
/*
    Um caso de uso para interfaces é simplicar os parâmetros de objeto de funções;
    Ou seja, em vez de passar parâmetros de um objeto longo para n funções,
    passamos apenas a interface;
*/
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
  if (product.isAvailable) {
    console.log('O produto está disponivel');
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });
