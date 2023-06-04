"use strict";
//* 1. Arrays - mais utilizada essa sintaxe
let numbers = [1, 2, 3];
numbers.push(10);
console.log(numbers[2]);
const nomes = ['Eric', 'Joâo'];
//* 2. Outras sintaxes de arrays - não muito usado essa sintaxe
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[2]);
//* 3. O tipo 'any'
/*
    O 'any' transmite ao TS que qualquer tipo satisfaz a variável;
    Devemos evitar ao máximo este tipo, pois vai contra os principios do TypeScript;
    Dois casos de usos: o tipo de dado realmente não importa e arrays com dados de múltiplos tipos;
*/
const arr1 = [1, 'teste', true, [], { nome: 'Eric' }];
console.log(arr1);
