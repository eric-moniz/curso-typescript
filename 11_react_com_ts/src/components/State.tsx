import React, { ChangeEvent, useState } from 'react';

const State = () => {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <label htmlFor="inputBox">Digite algum texto:</label>
      <input
        type="text"
        name="inputBox"
        placeholder="digite aqui..."
        onChange={handleChange}
      />
      <p>O texto é: {text}</p>
    </div>
  );
};

export default State;
