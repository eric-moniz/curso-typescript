"use strict";
//* 1 - numbers
let x = 10;
console.log(x);
const y = 15.8576;
console.log(y.toPrecision(4));
//* 2 - string
const firstName = 'Eric';
console.log(firstName.toUpperCase());
let fullName;
const lastName = 'Moniz';
fullName = firstName + ' ' + lastName;
console.log(fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
//* 4 - Inference e Anotation
let ann = 'Teste'; // anotation, nós que definimos o tipo, nessa caso uma string
let inf = 'Teste'; // inference, o typescript assume que é uma string
//* Compilação automática, usar tsc -w
console.log('Testando a compilação automática');
