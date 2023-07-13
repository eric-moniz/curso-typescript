"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    return function (target, propertyKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    // os decorators estão atrelados ao método da classe
    testing() {
        console.log('terminando a execução do método');
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
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
    return function (target, propertyKey, descriptor) {
        console.log('executou a.');
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log('executou b.');
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log('executou c.');
    };
}
class MultipleDecorators {
    testing() {
        console.log('Terminando a execução');
    }
}
__decorate([
    c() // 3. decorator a ser executado
    ,
    a() // 2. decorator a ser executado
    ,
    b() // 1. decorator a ser executado
], MultipleDecorators.prototype, "testing", null);
const mutiple = new MultipleDecorators();
mutiple.testing();
//////////////////////////////////////////////////////////////////////////////////////////
/*
* 3. Decorator de classe
    O decorator de classe está ligado ao constructor;
    Ou seja, sempre que este for executado, teremos a execução do decorator;
    Isso nos permite acrescentar algo a criação de classes;
*/
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === 'User') {
        console.log('Criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const user1 = new User('Eric');
console.log(user1);
/////////////////////////////////////////////////////////////////////////////////////////
/*
 * 4. Decorator de método
  Com este decorator podemos 'modificar a execução de métodos';
  Precisamos inserir o decorator 'antes da declaração do método';
  Ele é executado antes do método;
*/
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false) //torna o método showname visivel na classe
], Machine.prototype, "showName", null);
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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
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
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
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
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber() //aplicando o decorator
], ID.prototype, "id", void 0);
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
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
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
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
newPost.post('Meu segundo post!', newPost.alreadyPosted);
/////////////////////////////////////////////////////////////////////////////////////////
/*
* 9. Exemplo real: Property Decorator
  Com o Property Decorator conseguimos verificar uma propriedade de um objeto;
  Vamos criar uma validação de número máximo de caracteres com decorators;
*/
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('pedroadmin12345');
let eric = new Admin('eric2234');
console.log(eric);
