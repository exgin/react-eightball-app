import React from 'react';
import Eightball from './Eightball.js';
import answers from './answers.js';

function App() {
  return (
    <>
      <Eightball answers={answers} />
    </>
  );
}

export default App;
