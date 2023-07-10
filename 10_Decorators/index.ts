//* O que são os decorators?
/*
    Decorators podem adicionar funcionalidades extras a classes e funções;
    Basicamente criamos novas funções, que são adicionadas a partir de um '@nome';
    Esta função será chamada assim que o item que foi definido o decorator for executado;
    Para habilitar precisamos adicionar uma configuração no tsconfig.json;
*/

/*
    * 1. Criando o primeiro Decorator
    Vamos criar um decorator como uma function;
    Ele pode trabalhar com argumentos especiais que são: 'target', 'propertyKey' e 'descriptor'
    Estes são grandes trunfos do decorator pois nos dão a informação do local em que ele foi executado;
*/
function myDecorator() {
  // pode-se adicionar código antes do retorno
  console.log('Iniciando decorator!');

  // deve-se retornar uma function
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Executando decorator');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  // os decorators estão atrelados ao método da classe
  @myDecorator()
  testing() {
    console.log('terminando a execução do método');
  }
}

const myObj = new myClass();

myObj.testing();
