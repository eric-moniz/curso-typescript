/* 
    Desafio 2:
    1. Crie uma variavel que receba um numero
    2. Converta esse numero para string em uma nova variável
    3. Esta variável de conversão deve estar tipada por inferencia
    4. Imprima este número em uma string maior, utilizando o recurso de template string ou cancate
*/

let num: number = 10;
let str = '';

str = `${num}`;
// ou str = number.toString(num)

console.log('O valor da variável "num" é: ' + str);
