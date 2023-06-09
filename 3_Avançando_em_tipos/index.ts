//* 1. Arrays - mais utilizada essa sintaxe

let numbers: number[] = [1, 2, 3];

numbers.push(10);

console.log(numbers[2]);

const nomes: string[] = ['Eric', 'Joâo'];

//* 2. Outras sintaxes de arrays - não muito usado essa sintaxe

const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[2]);

//* 3. O tipo 'any'
/*
    O 'any' transmite ao TS que qualquer tipo satisfaz a variável;
    Devemos evitar ao máximo este tipo, pois vai contra os principios do TypeScript;
    Dois casos de usos: o tipo de dado realmente não importa e arrays com dados de múltiplos tipos;
*/

const arr1: any = [1, 'teste', true, [], { nome: 'Eric' }];
console.log(arr1);

//* 4. Tipo de parâmetro de funçôes

function soma(a: number, b: number) {
  console.log(a + b);
}
soma(4, 5);

//* 5. Tipo de retorno de funçôes

function greeting(name: string): string {
  return `Olá ${name}`;
}
console.log(greeting('Eric'));

//* 6. Funções anônimas

setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary)); // -> gera erro porque parseFloat espera uma string como argumento
  // console.log(sallary); // -> funciona
}, 2000);

//* 7. Tipos de objeto
// sintaxe é: { prop: tipo1, prop: tipo2 }
function passCoordinates(coord: { x: number; y: number }) {
  console.log('X coordinates: ' + coord.x);
  console.log('Y coordinates: ' + coord.y);
}
passCoordinates({ x: 25, y: 45.987 });

//* 8. Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a);
  console.log('B: ' + b);
  if (c) console.log('C: ' + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);

//* 9. Validação de propriedades opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Eric', 'Moniz'));
console.log(advancedGreeting('Eric'));

//* 10. Union type
/*
    O Union type é uma alternativa melhor do que o 'any';
    Onde podemos 'determinar dois tipos' para um dado;
    A sintaxe (ex): number | string
*/
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}
showBalance(1000);
showBalance('500');
const arr2: Array<number | string | boolean> = [1, 'teste', true];

//* 11. Condicionais com union types
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado';
  }
  return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));

//* 12. Type alias
type ID = string | number;
function showId(id: ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId('200');

//* 13. interface
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};
showCoords(coordObj);

// 14. Type Alias e interfaces
/* 
  Na maioria das vezes podemos optar entre qualquer um dos recursos sem problemas;
  A única diferença é que a interface pode ser alterada ao longo do código,já o alias não;
  Ou seja, se pretendermos mudar como o tipo se conforma, devemos escolher a interface;
*/

// adicionando uma proprieda na interface ex:
interface Person {
  name: string;
}
interface Person {
  age: number;
}

const somePerson: Person = { name: 'Eric', age: 43 };
console.log(somePerson);

// usando o type
type personType = {
  name: string;
};

// ao tentar declarar novamente o obj personType, irá gerar erro
// type personType = {
//   age: number
// }

//* 15. Literal types
/* 
  Literal types é um recurso que permite colocar valores como tipos;
  Isso restringe o uso não só tipos,como também os própios valores;
  Este recurso é muito utilizado com Union types;
*/

let test: 'testando';

// test = 'q' // gera erro!
test = 'testando';
console.log(test);

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é: ${direction}`);
}

showDirection('center');
// showDirection('top'); // gera erro pois top nao é um tipo

//* 16. Non-null Assertion Operator
/* 
  Às vezes o typescript pode evidenciar um erro, baseado em um valor que no
  momento do código ainda não está disponivel;
  Porém se sabemos que este valor será preenchido, podemos evitar o erro;
  Utilizando do caracter '!'
*/
const p = document.getElementById('some-p');
console.log(p!.innerText);

//* 17. BigInt
/* 
  Com o tipo bigInte podemos declarar números com valores muuito altos;
  Podemos utilizar a notação literal, por exemplo: 100n;
  Para este recurso precisamos mudar a configuração do TS, para a versão mínima
  de ES2020
*/

let n: bigint;
// n = 1 // gera erro pois o valor é muito baixo e pode ser do tipo number normal
n = 1000n;

console.log(n);
