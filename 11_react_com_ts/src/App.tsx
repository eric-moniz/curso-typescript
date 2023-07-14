import React from 'react';

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
    </div>
  );
}

export default App;
