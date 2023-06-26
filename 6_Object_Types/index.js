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
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
//* 7. ReadOnlyArray
/*
    O 'ReadOnlyArray' é um tipo para arrays, que deixa os itens como readonly;
    Podemos 'aplicar um tipo para os itens do array', além desta propriedade
    especial;
    'A modificação de itens pode ser feita através de método', mas não podemos
    aumentar o array, por exemplo;
*/
let myArray = ['Maçã', 'Laranja', 'Banana'];
// myArray[3] = 'Mamão'; // gera erro, não pode manipular o array
console.log(myArray);
// podemos ler o conteudo do array normalmente
myArray.forEach((item) => console.log('Fruta: ' + item));
/* podemos alterar os itens do Array usando métodos, porém não conseguimos alterar
diretamente o array */
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6] // gera erro, ultrapassou numero máximo de elementos
// const mixedArray: fiveNumbers = [1,true,'teste',4,5] // gera erro, declarando tipo errado dos elementos
console.log(myNumberArray);
const anotherUser = ['Matheus', 30];
console.log(anotherUser[0]);
anotherUser[0] = 'João';
console.log(anotherUser[0]);
