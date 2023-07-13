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

/////////////////////////////////////////////////////////////////////////////////////////
/*
 * 4. Decorator de método
  Com este decorator podemos 'modificar a execução de métodos';
  Precisamos inserir o decorator 'antes da declaração do método';
  Ele é executado antes do método;
*/
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false) //torna o método showname visivel na classe
  showName() {
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine('Trator');

console.log(trator.showName());

//////////////////////////////////////////////////////////////////////////////////////////
/*
 * 5. Accessor decorator
  Semelhante ao decorator de método;
  Porém este serve apenas para os 'getters e setters';
  Podemos alterar a execução antes de um set ou get;
 */
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }

  /* enumerable setada para false ou omitida neste exemplo naõ lista o getter, mas permite
    a chamado desse getter
  */
  // @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const chamander = new Monster('Chamander', 10);

console.log(chamander);
console.log(chamander.showAge);

//////////////////////////////////////////////////////////////////////////////////////////
/*
 *  6. Property decorator
    O property decorator é utilizado nas propriedades de uma classe;
    Ou seja, na hora da definição da mesma podemos 'ativar uma função';
    Isso nos ajuda a modificar ou validar algum valor;
 */
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0');
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber() //aplicando o decorator
  id;

  constructor(id: string) {
    this.id = id;
  }
}
const newItem = new ID('1');

console.log(newItem);
// note que a estrutura do objeto mudou, mas pode-se acessá-lo normalmente
console.log(newItem.id);

/////////////////////////////////////////////////////////////////////////////////////////
/*
 * 7. Exemplo real de class Decorator
  Com Class Decorator podemos influenciar o construtor
  Neste exemplo vamos criar uma função para inserir data de criação dos objetos
 */
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);

/////////////////////////////////////////////////////////////////////////////////////////
/*
 * 8. Exemplo real com Method decorator
  Com o Method Decorator podemos alterar a execução dos métodos;
  Neste exemplo vamos verificar se um usuário pode ou não fazer uma alteração no sistema;
  A alteração seria o método a ser executado
 */

function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log('Usuário já postou!');
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
