// src/App.js

import React, { useState, useEffect, useMemo } from 'react';
import Word from './components/Palabra';
import Keyboard from './components/Teclado';
import Hangman from './components/Ahorcado';

function App() {
  const words = useMemo(
    () => ['react', 'javascript', 'programacion', 'ahorcado', 'desarrollo'],
    []
  );
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const maxMistakes = 6;

  // Selecciona una palabra aleatoria de la lista al montar el componente
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, [words]);

  const handleLetterClick = (letter) => {
    if (word.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
    } else {
      setMistakes((prev) => prev + 1);
    }
  };

  const isWinner = word && word.split('').every((letter) => guessedLetters.includes(letter));
  const isLoser = mistakes >= maxMistakes;

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setMistakes(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Juego de Ahorcado</h1>
      <Hangman mistakes={mistakes} />
      {word && <Word guessedLetters={guessedLetters} word={word} />}
      {isWinner && (
        <div>
          <h2>¡Ganaste!</h2>
          <button onClick={resetGame}>Jugar de nuevo</button>
        </div>
      )}
      {isLoser && (
        <div>
          <h2>Perdiste. La palabra era: {word}</h2>
          <button onClick={resetGame}>Intentar de nuevo</button>
        </div>
      )}
      {!isWinner && !isLoser && (
        <Keyboard onLetterClick={handleLetterClick} guessedLetters={guessedLetters} />
      )}
    </div>
  );
}

export default App;
