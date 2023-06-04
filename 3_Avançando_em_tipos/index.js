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
//* 4. Tipo de parâmetro de funçôes
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//* 5. Tipo de retorno de funçôes
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Eric'));
//* 6. Funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary)); // -> gera erro porque parseFloat espera uma string como argumento
    // console.log(sallary); // -> funciona
}, 2000);
//* 7. Tipos de objeto
// sintaxe é: { prop: tipo1, prop: tipo2 }
function passCoordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('Y coordinates: ' + coord.y);
}
passCoordinates({ x: 25, y: 45.987 });
//* 8. Propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c)
        console.log('C: ' + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
