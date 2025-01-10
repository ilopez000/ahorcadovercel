

import React from 'react';

const Palabra = ({ guessedLetters, word }) => {
  return (
    <div>
      {word.split('').map((letter, index) => (
        <span key={index} style={{ fontSize: '2em', marginRight: '10px' }}>
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
};

export default Palabra;

