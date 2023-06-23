"use strict";
//* O que são Object Types?
/*
    São os dados que tem como o tipo objeto, por exemplo: object literals e arrays;
    Temos diversos recursos para explorar sobre estes  tipos;
    Como: Interfaces, readonly, tupla e outros;
    Isso nos dá possibilidades a mais para o JavaScript;
*/
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponivel');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'eric@email.com', role: 'Admin' };
const u2 = { email: 'joao@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
// podemos adicionar mais propriedades ao objeto, desde que respeitamos a interface
coords.y = 15;
console.log(coords); // {x: 10, y: 15}
const eric = {
    name: 'Eric',
    age: 43,
};
console.log(eric);
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpowers);
