import React from 'react';
// aula 4 - Importando componente
import FirstComponent from './components/FirstComponent';
// aula 5 - Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring from './components/Destructuring';
// aula 6. useState
import State from './components/State';

function App() {
  // 1. Variaveis
  const name: string = 'Eric';
  const ano: number = 2023;
  const isWorking: boolean = true;

  // aula aula 2. funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

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
      />
      <State />
    </div>
  );
}

export default App;
