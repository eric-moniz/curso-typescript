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
