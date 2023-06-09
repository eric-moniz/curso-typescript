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

//* 6. Intersection Types
/*
  'Intersection Types' são utilizados para criar tipos mais complexos a partir
  de duas interfaces, por exemplo;
  Podemos concatenar os tipos com '&';
*/
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
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
let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana'];

// myArray[3] = 'Mamão'; // gera erro, não pode manipular o array

console.log(myArray);

// podemos ler o conteudo do array normalmente
myArray.forEach((item) => console.log('Fruta: ' + item));

/* podemos alterar os itens do Array usando métodos, porém não conseguimos alterar
diretamente o array */
myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

//* 8. Tuplas
/*
  'Tupla é um tipo de array', porém definimos a quantidade e o tipo de elementos;
  Basicamente 'criamos um novo type', e nele inserimos um array com os tipos
  necessários;
  Cada tipo conta também como um elemento;
*/
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6] // gera erro, ultrapassou numero máximo de elementos
// const mixedArray: fiveNumbers = [1,true,'teste',4,5] // gera erro, declarando tipo errado dos elementos

console.log(myNumberArray);

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ['Matheus', 30];
console.log(anotherUser[0]);

anotherUser[0] = 'João';
console.log(anotherUser[0]);

//* 9. Tuplas com readOnly
/*
  Podemos criar 'tuplas com a propriedade de readonly';
  É um tipo de dado 'super restrito' pois:
  - Limita quano itens teremos, qual o tipo de cada um e também não são modificáveis;
*/
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10; // gera erro ao tentar modificar
  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
