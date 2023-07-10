"use strict";
//* O que são os decorators?
/*
    Decorators podem adicionar funcionalidades extras a classes e funções;
    Basicamente criamos novas funções, que são adicionadas a partir de um '@nome';
    Esta função será chamada assim que o item que foi definido o decorator for executado;
    Para habilitar precisamos adicionar uma configuração no tsconfig.json;
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    * 1. Criando o primeiro Decorator
    Vamos criar um decorator como uma function;
    Ele pode trabalhar com argumentos especiais que são: 'target', 'propertyKey' e 'descriptor'
    Estes são grandes trunfos do decorator pois nos dão a informação do local em que ele foi executado;
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
