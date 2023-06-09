//* 1. void - Funções que não retornam nada
/*
  Podemos ter funções que não retornam valores;
  Qual seria o tipo de dadomindicado para essa situação?
  Neste caso utilizamos o void!
  Ele vai dizer ao TS que não temos um valor de retorno;
*/
function withoutReturn(): void {
  console.log('Esta função não tem retorno');
  // return 1 // gera erro não pode a clausula de return
}

withoutReturn();

//* 2. Callback como argumento
/*
  Podemos inserir uma função de callback como argumento de função;
  Nela conseguimos definir o tipo de argumento aceito pela callback;
  E também o tipo de retorno da mesma
*/
function greeting(name: string): string {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a função!');

  const greet = f(userName);

  console.log(greet);
}

preGreeting(greeting, 'Eric');
preGreeting(greeting, 'João');

//* 3. Generic functions
/*
  É uma estratégia para quando o tipo de retorno é relacionado ao tipo do
  argumento;
  Por exemplo: um item de um array, pode ser string, boolean, ou number;
  Normalmente são utilizadas letras como 'T' ou 'U' para definir os generics,
  é uma convenção;
*/
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  { name: 'Eric' },
  { age: 43, job: 'programmer' }
);
console.log(newObject);

//* 4. Constraints nas Generic Functions
/*
  As generic Functions podem ter seu escopo reduzido por constraints;
  Basicamente limitamos os tipos que podem ser utilizados no Generic;
  Isso faz com que nosso escopo seja menos abrangente;
*/
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
