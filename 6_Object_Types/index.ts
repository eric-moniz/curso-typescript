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

//* 3. Propriedades readonly
/*
    As propriedades readonly podem ser alteradas apenas uma vez, na criação do novo dado;
    É uma forma de criar um valor constante em um objeto;
    Podemos adicionar as interfaces;
*/
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
};

console.log(fusca);
// fusca.wheels = 5 // gera erro pois é somente leitura

//* 4. Index Signature
/*
    Utilizamos o index signature quando não sabemos o nome das chaves, mas já sabemos
    quais os tipos de um objeto ou array;
    Isso restringe a tipos que não devem ser utilizados;
    Uma barreira de segurança a mais na nossa variável;
*/
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

// podemos adicionar mais propriedades ao objeto, desde que respeitamos a interface
coords.y = 15;

console.log(coords); // {x: 10, y: 15}

// coords.z = '1'; // gera erro pois a propriedade só aceita numbers

//* 5. extending interfaces - Herança de interfaces
/*
  Utilizamos 'Extending Types' como uma herança para criar tipos mais complexos
  por meio de uma interface;
  Ou seja, uma interface pode 'herdar as propriedades e tipos já definidos' de outra;
  Isso acontece por meio da instrução 'extends'
*/
interface Human {
  name: string;
  age: number;
}
// A interface SuperHuman usa as propriedades da interface Human, usamos o extends
// para não declarar novamentes as mesmas propriedades
interface SuperHuman extends Human {
  superpowers: string[];
}

const eric: Human = {
  name: 'Eric',
  age: 43,
};
console.log(eric);

const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(goku);
console.log(goku.superpowers);
