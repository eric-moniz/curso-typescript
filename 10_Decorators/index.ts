//* O que são os decorators?
/*
    Decorators podem adicionar funcionalidades extras a classes e funções;
    Basicamente criamos novas funções, que são adicionadas a partir de um '@nome';
    Esta função será chamada assim que o item que foi definido o decorator for executado;
    Para habilitar precisamos adicionar uma configuração no tsconfig.json;
*/
//////////////////////////////////////////////////////////////////////////////////////////
/*
    * 1. Criando o primeiro Decorator
    Vamos criar um decorator como uma function;
    Ele pode trabalhar com argumentos especiais que são: 'target', 'propertyKey' e
    'descriptor'
    Estes são grandes trunfos do decorator pois nos dão a informação do local em que ele
    foi executado;
*/
function myDecorator() {
  // pode-se adicionar código antes do retorno
  console.log('Iniciando decorator!');

  // deve-se retornar uma function
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  // os decorators estão atrelados ao método da classe
  @myDecorator()
  testing() {
    console.log('terminando a execução do método');
  }
}

const myObj = new myClass();

myObj.testing();

//////////////////////////////////////////////////////////////////////////////////////////
/*
* 2. Mútiplos decorators
    Podemos utilizar mútiplos decorators em TS;
    O primeiro a ser executador é o que está mais abaixo do código;
    Desta maneira é possível criar operações mais complexas;
*/
function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou a.');
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou b.');
  };
}

function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('executou c.');
  };
}

class MultipleDecorators {
  @c() // 3. decorator a ser executado
  @a() // 2. decorator a ser executado
  @b() // 1. decorator a ser executado
  testing() {
    console.log('Terminando a execução');
  }
}

const mutiple = new MultipleDecorators();

mutiple.testing();

//////////////////////////////////////////////////////////////////////////////////////////
/*
* 3. Decorator de classe
    O decorator de classe está ligado ao constructor;
    Ou seja, sempre que este for executado, teremos a execução do decorator;
    Isso nos permite acrescentar algo a criação de classes;
*/
function classDec(constructor: Function) {
  console.log(constructor);

  if (constructor.name === 'User') {
    console.log('Criando usuário');
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const user1 = new User('Eric');

console.log(user1);
