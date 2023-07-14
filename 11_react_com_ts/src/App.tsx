import React from 'react';

function App() {
  // 1. Variaveis
  const name: string = 'Curso TS';
  const ano: number = 2023;
  const isWorking: boolean = true;

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>{name}</h2>
      <p>{ano}</p>
      {isWorking && <p>Está trabalhando!</p>}
    </div>
  );
}

export default App;
