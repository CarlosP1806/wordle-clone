import React, { useEffect, useState } from 'react';

export default function Keyboard({
  onLetterPress,
  onDeletePress,
  onSubmitGuess,
  board,
  winnerWord,
  currentRow
}) {
  
  function handleKeyClick(event) {
    onLetterPress(event.target.textContent);
  }

  function determineKeyStyle(key) {
    let keyStyle = 'key--inactive';
    let keyCorrect = false;

    board.slice(0, currentRow).forEach((row, rowIndex) => {
      const guessedWord = row.join("").toLowerCase();

      for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWord[i] === key.toLowerCase()) {
          if (guessedWord[i] === winnerWord[i] || keyCorrect) {
            keyStyle = 'key--correct';
            keyCorrect = true;
          } else if (winnerWord.includes(guessedWord[i]) && !keyCorrect) {
            keyStyle = 'key--partial';
          } else {
            keyStyle = 'key--incorrect';
          }
        }
      }
    }); 

    return keyStyle;
  }

  return (
    <div className="keyboard">
      { 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('').map(letter => (
        <div key={letter} className={`key ${determineKeyStyle(letter)}`} onClick={handleKeyClick}>{letter}</div>
      ))}

      <div className="key" onClick={onDeletePress}>Del</div>
      <div className="key key--large" onClick={onSubmitGuess}>Enter</div>
    </div>
  );
}
