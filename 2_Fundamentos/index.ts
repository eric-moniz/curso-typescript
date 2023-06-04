//* 1 - numbers

let x: number = 10;

console.log(x);

const y: number = 15.8576;
console.log(y.toPrecision(4));

//* 2 - string

const firstName: string = 'Eric';
console.log(firstName.toUpperCase());

let fullName: string;

const lastName: string = 'Moniz';

fullName = firstName + ' ' + lastName;

console.log(fullName);

// 3 - boolean
let a: boolean = false;
console.log(a);
console.log(typeof a);

a = true;
console.log(a);

//* 4 - Inference e Anotation

let ann: string = 'Teste'; // anotation, nós que definimos o tipo, nessa caso uma string

let inf = 'Teste'; // inference, o typescript assume que é uma string
