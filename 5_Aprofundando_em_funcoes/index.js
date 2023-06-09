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
