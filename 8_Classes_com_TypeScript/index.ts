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
  public x = 10;
}

class D extends C {}

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
  protected x = 10;

  protected protectedMethod() {
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

//* 13 Visibilidade: private
/*
  Os itens private,propriedades e métodos, só podem ser acessados na classe que os definiu;
  E ainda precisam de métodos para serem acessados;
  Está é a maior proteção para propriedades e métodos;
*/
class PrivateClass {
  private name = 'Private';

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log('Método privado');
  }

  showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();

console.log(pObj.showName());

pObj.showPrivateMethod();

//! gera erro ao tentarmos acessar de uma varivael ou método de uma outra classe
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.showPrivateMethod();
//   }
// }

//* 14. Static members
/*
  Podemos criar propriedades e méthodos estáticos em classes;
  Isso faz com que o acesso ou a utilização não dependam de objetos;
  Podemos utiliza-los a partir da própria classe, ou seja não precisamos instancia-los;
*/
class StaticMembers {
  static prop = 'Teste static';

  static staticMethod() {
    console.log('Este é um método estático');
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

//* 15. Generic class
/*
  Podemos criar classes com tipos genéricos também;
  Ou seja, as propriedades dos argumentos podem ter os tipos definidos na hora da criação
  da instância;
  Isso nos permite maior flexbilidade em uma classe;
*/
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item('caixa', 'surpresa');

console.log(newItem);

console.log(newItem.showFirst);
console.log(typeof newItem.first);

const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

//* 16. Parameters properties
/*
  Parameters pproperties é um recurso para definir a privacidade, nome e tipo das propriedades
  no construtor
  Isso resume um pouco a sintaxe das nossas classes;
*/
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Preço: R$${this.price}`;
  }
}

const newShirt = new ParameterProperties('Camisa', 5, 19.99);

console.log(newShirt.name);
// console.log(newShirt.price); // gera erro só pode ser acessadas por metodos da classe
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

//* 17. Class Expressions
/*
  Class expressions é um recurso para criar uma classe anônima;
  Podemos também utilizar generics junto desse recurso;
  Vamos encapsular a classe em uma variável;
*/
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass('Jones');

console.log(pessoa);
console.log(pessoa.name);

/*
* 18. Classe abstrata
  Abstract Class é um recurso para servir como molde de outra classe;
  Todos os métodos dela devem ser implementados nas classes que a herdam;
  E também não podemos instanciar objetos a partir destas classes;
*/

abstract class AbstractClass {
  abstract showName(): void;
}

// note que gera erro ao tentar instanciar um objeto nessa classe
// const newObj = new AbstractClass();

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é: ${this.name}`);
  }
}
const newAbstractObject = new AbstractExample('Josias');
newAbstractObject.showName();

/*
* 19. Relações entre classes
  Podemos criar um objeto com base em outra classe;
  Quando as classes são idênticas o TS não reclama sobre esta ação;
  Precisamos que as duas sejam exatamente iguais
*/

class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

console.log(doguinho);
