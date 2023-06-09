"use strict";
//* 1. void - Funções que não retornam nada
/*
  Podemos ter funções que não retornam valores;
  Qual seria o tipo de dadomindicado para essa situação?
  Neste caso utilizamos o void!
  Ele vai dizer ao TS que não temos um valor de retorno;
*/
function withoutReturn() {
    console.log('Esta função não tem retorno');
    // return 1 // gera erro não pode a clausula de return
}
withoutReturn();
//* 2. Callback como argumento
/*
  Podemos inserir uma função de callback como argumento de função;
  Nela conseguimos definir o tipo de argumento aceito pela callback;
  E também o tipo de retorno da mesma
*/
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Eric');
preGreeting(greeting, 'João');
//* 3. Generic functions
/*
  É uma estratégia para quando o tipo de retorno é relacionado ao tipo do
  argumento;
  Por exemplo: um item de um array, pode ser string, boolean, ou number;
  Normalmente são utilizadas letras como 'T' ou 'U' para definir os generics,
  é uma convenção;
*/
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: 'Eric' }, { age: 43, job: 'programmer' });
console.log(newObject);
//* 4. Constraints nas Generic Functions
/*
  As generic Functions podem ter seu escopo reduzido por constraints;
  Basicamente limitamos os tipos que podem ser utilizados no Generic;
  Isso faz com que nosso escopo seja menos abrangente;
*/
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
//* 5. Definindo tipo de parâmetros / argumentos
/*
  Em Generic functions temos que utilizar parâmetros de tipos semelhantes, se
  não recebemos um erro;
  Porém há a possibilidade de determinar o tipo também dos parâmetros aceitos,
  com uma sintaxe especial;
  Isso faz com que a validação do TS aceite os tipos escolhidos;
*/
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
//* 6. Parâmetros opcionais
/*
  Nem sempre utilizamos todos os parâmetros de uma função;
  Mas se ele for opcional, precisamos declarar isso para o TS;
  E ainda deixar ele no fim da lista de parâmetros;
*/
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Matheus'));
console.log(modernGreeting('Eric', 'Dr.'));
//* 7. Parâmetros default
/*
  Os parâmetros default são os que já possuem um valor definido;
  Se não passarmos para a função, é utilizado esse valor;
  Para este recurso, a aplicação em TS é igual JS;
*/
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(1, 15));
//* 8. O tipo unknown
/*
  O tipo unknown é utilizado de forma semelhante ao any, ele aceita qualquer
  tipo de dado;
  Porém a diferença é que ele não deixa algo ser executado se não houver valida
  ção de tipo;
  Ou seja, adiciona uma trava de segurança;
*/
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething(1);
doSomething([1, 2, 3]);
//* 9. o tipo never
/*
    O never é um tipo de retorno semelhante ao void;
    Porém é utilizado quando a função não retorna nada;
    Um exemplo de uso: retorno de erros;
 */
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('Algum erro!');
//* 10. Rest Parameters ou operator
/*
  Em JavaScript ES6 podemos utilizar o Rest Operator;
  Para aplicá-lo em parâmetros em TS é fácil, basta definir o tipo de dado com a sintaxe de Res(...);
*/
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2350));
// console.log(sumAll('teste'));
//* 11. Destructuring em parâmetros
/*
  O Destructuring, outro recurso de ES6, também pode ser aplicado com TS;
  Precisamos apenas determinar o tipo de cada dado que será desestruturado;
  Desta maneira o TS valida o Destructuring;
*/
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
// console.log(showProductDetails({name: 'teste', age: 30}));
