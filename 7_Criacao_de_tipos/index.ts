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
