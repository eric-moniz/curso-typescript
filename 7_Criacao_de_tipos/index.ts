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
