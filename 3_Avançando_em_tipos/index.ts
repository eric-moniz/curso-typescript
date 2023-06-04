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
