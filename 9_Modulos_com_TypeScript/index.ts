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
