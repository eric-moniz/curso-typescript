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
