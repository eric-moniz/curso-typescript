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
import importGreet from './greet';
importGreet();

////////////////////////////////////////////////////////////////////////////////////////
/*
 * 2. Importação de variáveis
    Podemos exportar e importar variáveis também;
    A sintaxe é um pouco mais simples, vamos utilizar apenas o export;
    No arquivo de importação, vamos importar os valores com 'destructuring';
*/
import { x } from './variable';

console.log(x);

////////////////////////////////////////////////////////////////////////////////////////
/*
 * 3. Multiplas importações
  Podemos exportar mútiplas variáveis e funções;
  Isso pode ser realizado no mesmo arquivo;
  Para esta modalidade utilizamos export para todos os dados;
  E todos devem ser importados com destructuring;
 */
import { a, b, myFunction } from './multiple';

console.log(a);
console.log(b);

myFunction();

////////////////////////////////////////////////////////////////////////////////////////
/*
  * 4. Alias de importação
    Podemos criar um alias para importações
    Ou seja. 'mudar o nome' do quenfoi importado;
    Podendo tornar este novo nome, uma 'forma mais simples de chamar o recurso';
*/
import { someName as name } from './changeName';
console.log(name);
