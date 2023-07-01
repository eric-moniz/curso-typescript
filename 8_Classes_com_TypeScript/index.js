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
