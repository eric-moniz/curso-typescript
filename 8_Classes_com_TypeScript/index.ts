//* 1. Campos em classes
/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar a classe
  com campos para os futuros dados dos objetos;
  Que serão as propriedades dos objetos instanciados;
  Estes campos podem ser tipados também;
  Note que um campo sem valor inicial, deve ser declarado com '!';
*/
class User {
  name!: string;
  age!: number;
}

const eric = new User();

console.log(eric);

eric.name = 'Eric';
// eric.job = 'Programmer' // gera erro, só aceita as propriedades tipadas na classe

console.log(eric);
