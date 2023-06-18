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

//* 2. Propriedades opcionais em interfaces
/*
    As interfaces podem conter propriedades de objeto opcionais;
    Basta adicionar a interrogação no meio da propriedade;
    Exemplo: nome?: string
*/
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: User = { email: 'eric@email.com', role: 'Admin' };
const u2: User = { email: 'joao@email.com' };

showUserDetails(u1);
showUserDetails(u2);
