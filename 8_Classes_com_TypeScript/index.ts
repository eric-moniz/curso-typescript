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

//* 2. Constructor
/*
  Constructor é uma função que nos dá a possibilidade de iniciar um objeto com valores
  nos seus campos;
  Isso faz com que não precisemos mais da '!';
  Provavelmente todos os campos serão preenchidos na hora de instaciar um objeto;
*/
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
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
  name;
  readonly wheels = 4;

  constructor(name: string) {
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
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine('Trator');

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
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
  name;

  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo ${this.model}, que possui ${this.hp} cavalos de potência.`
    );
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
  name;
  surname;

  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) return;

    this.x = x;

    console.log(`O valor de x agora é: ${x}`);
  }

  set fillY(y: number) {
    if (y === 0) return;

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

//* 9. Herança de interfaces
/*
  Podemos herdar de interfaces também com a instrução 'implements';
  A idéia é bem parecida de 'extends';
  Porém esta forma é mais utilizada para criar os métodos que várias classes terão em comum;
*/
interface ShowTitle {
  itemTitle(): string;
}

class blogPost implements ShowTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
    return `O título do post é: ${this.title}`;
  }
}

class webPost implements ShowTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle(): string {
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
