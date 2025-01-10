

import React from 'react';

// Paremetros de entrada
// onLetterClick == letra que ha clicado es usuario

const Teclado = ({ onLetterClick, guessedLetters }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div style={{ marginTop: '20px' }}>
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter)}
          style={{ margin: '5px', padding: '10px', fontSize: '1em' }}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Teclado;

