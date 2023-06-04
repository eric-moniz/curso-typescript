//* 1. Arrays - mais utilizada essa sintaxe

let numbers: number[] = [1, 2, 3];

numbers.push(10);

console.log(numbers[2]);

const nomes: string[] = ['Eric', 'Joâo'];

//* 2. Outras sintaxes de arrays - não muito usado essa sintaxe

const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[2]);

//* 3. O tipo 'any'
/* 
    O 'any' transmite ao TS que qualquer tipo satisfaz a variável;
    Devemos evitar ao máximo este tipo, pois vai contra os principios do TypeScript;
    Dois casos de usos: o tipo de dado realmente não importa e arrays com dados de múltiplos tipos;
*/

const arr1: any = [1, 'teste', true, [], { nome: 'Eric' }];
console.log(arr1);

//* 4. Tipo de parâmetro de funçôes

function soma(a: number, b: number) {
	console.log(a + b);
}
soma(4, 5);

//* 5. Tipo de retorno de funçôes

function greeting(name: string): string {
	return `Olá ${name}`;
}
console.log(greeting('Eric'));

//* 6. Funções anônimas

setTimeout(function () {
	const sallary: number = 1000;

	// console.log(parseFloat(sallary)); // -> gera erro porque parseFloat espera uma string como argumento
	// console.log(sallary); // -> funciona
}, 2000);
