"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
////////////////////////////////////////////////////////////////////////////////////////
/*
  * 4. Alias de importação
    Podemos criar um alias para importações
    Ou seja. 'mudar o nome' do quenfoi importado;
    Podendo tornar este novo nome, uma 'forma mais simples de chamar o recurso';
*/
const changeName_1 = require("./changeName");
console.log(changeName_1.someName);
////////////////////////////////////////////////////////////////////////////////////////
/*
 * 5. Importando diversos itens de uma única vez (importando tudo)
    Podemos importar tudo que está em um arquivo com apenas um símbolo;
    Utilizamos o '*' para isso;
    Os dados virão em um objeto;
 */
const myNumbers = __importStar(require("./numbers"));
console.log(myNumbers);
console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);
myNumbers.showNumber();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User('João', 25);
console.log(joao);
