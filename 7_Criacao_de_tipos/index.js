"use strict";
//* Sobre a criação de novos tipos
/*
    Há a possibilidade de gerar novos tipos em TypeScript, já vimos isso com
    Generics(vamos nos aprofundar neste recurso também);
    Porém existem outros operadores que visam facilitar nossa vida neste assunto;
    A idéia deste recurso é deixar a manutenção do projeto mais simples;
    Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca de
    possíveis bugs  depois;
*/
//* 1. Revisão do Generics
/*
  Utilizamos Generics quando uma função pode aceitar mais de um tipo;
  É uma prática mais interessante do que o 'any', que teria um efeito semelhante;
  Porém com Generics;
*/
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
//* 2. Reduzindo tipos aceitos em generics - 'Constraints'
/*
  As constraints nos ajudam a limitar os tipos aceitos;
  Como em Generic podemos ter tipos livres, elas vão filtrar os tipos aceitos;
  Adicionando organização quando queremos aproveitar a liberdade dos Generics;
*/
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Marrom' };
const myObjCar = { name: 'Carro', wheels: 4, engine: 1.0 };
const myObj2 = { description: 'Description obj', qty: 2 };
console.log(showProductName(myObj));
console.log(showProductName(myObjCar));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.3, color: 'Branco' };
const myPen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };
console.log(myCar);
console.log(myPen);
//* 4. Type parameters
/*
 * 'Type parameters' é um recurso de Generics;
 *  Utilizado para dizer que 'algum parâmetro de uma função', por exemplo,
 * é a chave do objeto, que também é um parâmetro;
 * Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave
 */
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Eric',
    age: 43,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName(myChar, 'gender')); // gera erro
//* 6. typeof Type Operator
/*
  Com o typeof Type Operator podemos criar um novo tipo;
  Este tipo será baseado no tipo de algum dado;
  Ou seja, é interessante para quando queremos criar uma variável com o mesmo
  tipo da outra, por exemplo;
*/
const userName = 'Matheus';
const userName2 = 'João';
const userName4 = 'Joaquim';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga',
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
