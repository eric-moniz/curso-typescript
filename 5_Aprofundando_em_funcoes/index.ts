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
