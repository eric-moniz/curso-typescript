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
function showData<T>(arg: T): string {
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
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Marrom' };
const myObjCar = { name: 'Carro', wheels: 4, engine: 1.0 };
const myObj2 = { description: 'Description obj', qty: 2 };
console.log(showProductName(myObj));
console.log(showProductName(myObjCar));
// console.log(showProductName(myObj2)); // gera erro por não possuir a propriedade 'name'

//* 3. Interfaces com Generics
/*
  Com interfaces podemos criar tipos complexos para objetos;
  Adicionando Generics podemos deixá-los mais brandos;
  Aceitando tipos diferentes em ocasiões diferentes;
*/
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.3, color: 'Branco' };
const myPen: Pen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' };

console.log(myCar);
console.log(myPen);

//* 4. Type parameters
/*
 * 'Type parameters' é um recurso de Generics;
 *  Utilizado para dizer que 'algum parâmetro de uma função', por exemplo,
 * é a chave do objeto, que também é um parâmetro;
 * Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave
 */
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));

//* 5. keyof Type Operator
/*
  Com o keyof Type Operator podemos criar um novo tipo;
  Ele aceita dados do tipo objeto, como object literal e arrays;
  E pode criar o tipo baseado nas chaves do objeto passado como parâmetro;
*/
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}

const myChar: Character = {
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
const userName: string = 'Matheus';

const userName2: typeof userName = 'João';

// const userName3: typeof userName = 14 // gera erro pois espera uma string

// pode ser usado com type
type x = typeof userName;

const userName4: x = 'Joaquim';

//* 7. Indexed Access types
/*
  A a bordagem Indexed Access types pode criar um tipo baseado em uma chave de objeto;
  Ou seja, conseguimos reaproveitar o tipo da chave para outros locais, como
  funções

  similar ao keyof, porém agora é mais especifico no tipo e não atrelado ao objeto em si
  como no caso de keyof
*/
type Truck = { km: number; kg: number; description: string };

type Km = Truck['km']; // estamos sendo mais especificos em relação ao tipo que nesse caso

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga',
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);
