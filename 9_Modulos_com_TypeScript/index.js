"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
* Introdução aos módulos
Os módulos são a forma que temos para importar códigos em arquivos;
Podemos exportar código com 'export default'
E importar com 'import';
Criaremos os arquivos com a extensão '.ts', mas importaremos como '.js';
Isso nos dá mais flexibilidade, podendo separar as responsabilidades em arquivos;
Usaremos o 'Node.js' para executar os arquivos com módulos;
*/
/////////////////////////////////////////////////////////////////////////////////////
/*
* 1. Importando arquivos
    Para começar 'vamos criar um arquivo simples e importar seu conteúdo;
    Basta criar um arquivo '.ts., desenvolver o código e exportar;
    Depois no arquivo principal, vamos importar o arquivo anterior, com a extensão '.js'
*/
const greet_1 = __importDefault(require("./greet"));
(0, greet_1.default)();
////////////////////////////////////////////////////////////////////////////////////////
/*
 * 2. Importação de variáveis
    Podemos exportar e importar variáveis também;
    A sintaxe é um pouco mais simples, vamos utilizar apenas o export;
    No arquivo de importação, vamos importar os valores com 'destructuring';
*/
const variable_1 = require("./variable");
console.log(variable_1.x);
////////////////////////////////////////////////////////////////////////////////////////
/*
 * 3. Multiplas importações
  Podemos exportar mútiplas variáveis e funções;
  Isso pode ser realizado no mesmo arquivo;
  Para esta modalidade utilizamos export para todos os dados;
  E todos devem ser importados com destructuring;
 */
const multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
