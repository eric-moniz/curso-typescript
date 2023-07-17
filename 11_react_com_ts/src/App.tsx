import React from 'react';
// aula 4 - Importando componente
import FirstComponent from './components/FirstComponent';
// aula 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';
// aula 6. useState
import State from './components/State';

/* 8. Types
    Além das interfaces, podemos criar estruturas de tipos com o type
    Isso nos permite criar dados com tipos de dados fixos
    Ou até tipos customizados, como quando utilizamos o operador '|'
*/
type textOrNull = string | null;
type fixed = 'Isso' | 'Ou' | 'Aquilo';

function App() {
  // 1. Variaveis
  const name: string = 'Eric';
  const ano: number = 2023;
  const isWorking: boolean = true;

  // aula aula 2. funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8. Type
  const myText: textOrNull = 'Tem algum texto aqui';
  let mySecondText: textOrNull = null;
  const testandoFixed: fixed = 'Isso';

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>{name}</h2>
      <p>{ano}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo componente" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={['ts', 'js']}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Mais outro conteúdo"
        commentsQty={5}
        tags={['py']}
        category={Category.P}
      />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
    </div>
  );
}

export default App;
