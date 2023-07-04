"use strict";
//* 1. Campos em classes
/*
  Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar a classe
  com campos para os futuros dados dos objetos;
  Que serão as propriedades dos objetos instanciados;
  Estes campos podem ser tipados também;
  Note que um campo sem valor inicial, deve ser declarado com '!';
*/
class User {
}
const eric = new User();
console.log(eric);
eric.name = 'Eric';
// eric.job = 'Programmer' // gera erro, só aceita as propriedades tipadas na classe
console.log(eric);
//* 2. Constructor
/*
  Constructor é uma função que nos dá a possibilidade de iniciar um objeto com valores
  nos seus campos;
  Isso faz com que não precisemos mais da '!';
  Provavelmente todos os campos serão preenchidos na hora de instaciar um objeto;
*/
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 22);
console.log(joao);
//* 3. Campos readonly
/*
  Podemos iniciar o campo com valor e torná-lo readonly;
  Ou seja, será um valor só para consulta;
  Não podemos alterar este valor ao longo do programa
*/
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car1 = new Car('Fusca');
console.log(car1);
console.log(car1.wheels);
// pode-se trocar a propriedade name
car1.name = 'Fusca turbo';
console.log(car1);
// porém nao podemos alterar a propriedade readonly
// car1.wheels = 5
//* 4. Herança e super
/*
  Para gerar uma herança utilizamos a palavra reservada extends;
  Depois vamos precisar passar as propriedades da classe pai para ela quando instanciamos
  um objeto;
  Isso será feito com a função super;
*/
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
//* 5. Métodos
/*
  Métodos são comos funções da classe;
  Podemos criá-los junto  das classes e os objetos podem utilizá-los;
  É uma maneira de adicionar funcionalidades as classes;
*/
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey stranger!');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
//* 6. O this
/*
  A palavra reservada this serve para nos referirmos ao objeto em si;
  Ou seja, conseguimos acessar as suas propriedades;
  Esta funcionalidade funciona da mesma forma que em JavaScript;
*/
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que possui ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck('Volvo', 400);
volvo.showDetails();
//* 7. Getters
/*
  Os getters são uma forma de retornar propriedades do objeto;
  Porém podemos modificá-las neste retorno, isso é muito interessante;
  Ou seja, é um método para ler propriedades;
*/
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const ericM = new Person('Eric', 'Moniz');
console.log(ericM.name);
console.log(ericM.fullName);
//* 8. Setters
/*
  Os getters lêem propriedades, os setters as modificam / atribuiem;
  Logo, podemos fazer validações antes de inserir uma propriedade;
  Os setters também funcionam como métodos;
*/
class Coords {
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
        console.log(`O valor de x agora é: ${x}`);
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
        console.log(`O valor de y agora é: ${y}`);
    }
    get getCoords() {
        return `x: ${this.x} e y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 5;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
class webPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
/* perceba que temos duas classes com o método itemTitle herdado da interface
   esse é a aplicação da herança, ajuda na mantenção do código.
*/
const myPost = new blogPost('Hello world!');
console.log(myPost.itemTitle());
//* 10. Override de métodos
/*
  O override é uma técnica utilizada para substituir um método de uma classe que herdamos algo;
  Basta criar o método com o mesmo nome na classe filha;
  Isso caracteriza o override;
*/
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
/* criamos uma classe que extende a classe Base, mas com o método com mesmo nome 'someMethod'
   com isso caracteriza o override e o ultimo método 'someMethod' é o que prevalece
*/
class Nova extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}
const myObj = new Nova();
myObj.someMethod();
//* Visibilidade
/*
  Visibilidade é o conceito de expor nossos métodos de classes;
  public: visibilidade default, pode ser acessado em qualquer lugar;
  protected: acessível apenas a subclasse da classe do método, para acessar uma propriedade
  precisamos de um método;
  private: apenas a classe que declarou o método pode utilizar;
*/
//* 11 Visibilidade: public
/*
  O public é o modo de visibilidade default;
  Ou seja,já está implicito e não precisamos declarar;
  Basicamente qualquer método ou propriedade de classe pai, estará acessivel na classe filha;
*/
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//* 12 Visibilidade: protected
/*
  Os itens protected podem ser utilizados apenas em subclasses;
  Uma propriedade só pode ser acessada por um método, por exemplo;
  O mesmo acontece com métodos;
  Adicionando uma camada de segurança ao código criado em uma classe;
*/
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este método é protegido');
    }
}
class F extends E {
    showX() {
        console.log('X: ' + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
// console.log(fInstance.x); // gera erro não conseguimos acessar diretamente
fInstance.showX();
fInstance.showProtectedMethod();
