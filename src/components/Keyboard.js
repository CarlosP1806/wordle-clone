import React from 'react';
import { useBoard } from '../context/BoardContext';

export default function Keyboard({
  onLetterPress,
  onDeletePress,
  onSubmitGuess,
}) {

  const { evaluateLetter } = useBoard();
  
  function handleKeyClick(event) {
    onLetterPress(event.target.textContent);
  }

  function determineKeyStyle(key) {
    let keyStyle = evaluateLetter(key);
    return `key--${keyStyle}`;
  }

  return (
    <div className="keyboard">
      <div className="keyboard__row">
        { 'QWERTYUIOP'.split('').map(letter => (
          <div key={letter} className={`key ${determineKeyStyle(letter)}`} onClick={handleKeyClick}>{letter}</div>
        ))}
      </div>

      <div className="keyboard__row">
        { 'ASDFGHJKLÑ'.split('').map(letter => (
          <div key={letter} className={`key ${determineKeyStyle(letter)}`} onClick={handleKeyClick}>{letter}</div>
        ))}
      </div>

      <div className="keyboard__row">
        { 'ZXCVBNM'.split('').map(letter => (
          <div key={letter} className={`key ${determineKeyStyle(letter)}`} onClick={handleKeyClick}>{letter}</div>
        ))}
        <div className="key" onClick={onDeletePress}>Del</div>
        <div className="key key--large" onClick={onSubmitGuess}>Enter</div>
      </div>

    </div>
  );
}
