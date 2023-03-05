import React, { useContext, useEffect, useState } from 'react';
import { getRandomWord, wordList } from '../utils';

const BoardContext = React.createContext();

export function useBoard() {
  return useContext(BoardContext);
}

export const WORD_SIZE = 5;

export const BoardProvider = ( {children} ) => {
  
  const [currentRow, setCurrentRow] = useState(0);
  const [winnerWord, setWinnerWord] = useState("");
  const [board, setBoard] = useState([
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
  ]);

  useEffect(() => {
    setWinnerWord(getRandomWord(wordList));
  }, [])
  
  function evaluateLetter(letter) {
    let result = 'inactive';
    let isCorrectKey = false;

    board.slice(0, currentRow).forEach(row => {
      const guessedWord = row.join("").toLowerCase();

      for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWord[i] === letter.toLowerCase()) {
          if (guessedWord[i] === winnerWord[i] || isCorrectKey) {
            result = 'correct';
            isCorrectKey = true;
          } else if (winnerWord.includes(guessedWord[i]) && !isCorrectKey) {
            result = 'partial';
          } else {
            result = 'incorrect';
          }
        }
      }
    }); 

    return result
  }

  return (
    <BoardContext.Provider value={{
      board,
      setBoard,
      winnerWord,
      evaluateLetter,
      currentRow,
      setCurrentRow,
    }}>
      {children}
    </BoardContext.Provider>
  )
}