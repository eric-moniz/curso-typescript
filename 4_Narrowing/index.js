"use strict";
//* O que é narrowing?
/*
    Narrowing é um recurso de TS para identificar tipos de dados;
    Dando assim uma direção diferente a execução do programa, baseada no tipo
    que foi identificado;
    Há situações em que os tipos podem ser imprevísiveis, e queremos executar
    algo para cada uma das possibilidades;
    Isso é fundamental também para evitar erros no compilador, identificando e
    resolvendo os possíveis erros na hora do desenvolvimento;
*/
//* 1. Typeof type guard
/*
    O type guard é basicamente uma validação do tipo utilizando o typeof;
    Desta maneira podemos comparar o retorno do operador com um possível tipo;
    Todos os dados vem como string, exemplo: 'string', 'number', 'boolean';
    E a partir disso realizamos as bifurcações;
*/
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma!');
    }
}
sum('4', '5');
sum(12, 49.3);
sum(12, '49.3');
//* 2. Checando se o valor existe
/*
    Em javascript podemos colocar uma variavel em um if, e se houver algun valor recebemos um true;
    Quando  não há valor, recebemos um false;
    Desta maneira conseguimos realizar o narrowing também, é uma outra estratégia bem utilizada;
*/
function operations(arr, operation) {
    if (operation === 'sum') {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    }
    else if (operation === 'multiply') {
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3]);
operations([2, 3, 4], 'sum');
operations([2, 3, 4], 'multiply');
//* 3. Operador instanceof
/*
  Para além dos tipos primitivos, podemos trabalhar com instanceof;
  Checando se um dado pertence a uma determinada classe;
  E ele vai servir até para as nossas próprias classes
*/
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('Paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
