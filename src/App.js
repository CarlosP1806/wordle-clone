import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import GameOverModal from "./components/GameOverModal";
import Keyboard from "./components/Keyboard";

import { WORD_SIZE, wordList, getRandomWord } from './utils';

function App() {

  const [isGameRunning, setIsGameRunning] = useState(true);
  const [winnerWord, setWinnerWord] = useState('');

  const [currentRow, setCurrentRow] = useState(0);
  const [board, setBoard] = useState([
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
  ]);


  console.log(winnerWord);

  useEffect(() => {
    setWinnerWord(getRandomWord(wordList));
  }, []);

  useEffect(() => {
    if (currentRow > 4) {
      setIsGameRunning(false);
    }
  }, [currentRow]);

  function onLetterPress(letter) {
    setBoard(prevBoard => {
      return prevBoard.map((row, rowIndex) => {
        if (rowIndex !== currentRow) return row;

        const newRow = [...row];
        let firstAvailableIndex = 0;
        while (firstAvailableIndex+1 < newRow.length && newRow[firstAvailableIndex] !== '') {
          firstAvailableIndex++;
        }
        
        newRow[firstAvailableIndex] = letter;
        return newRow;
      });
    });
  }

  function onDeletePress() {
    setBoard(prevBoard => {
      return prevBoard.map((row, rowIndex) => {
        if (rowIndex !== currentRow) return row;

        const newRow = [...row];
        let lastOccupiedIndex = 0;
        while (lastOccupiedIndex+1 < newRow.length && newRow[lastOccupiedIndex+1] !== '') {
          lastOccupiedIndex++;
        }
        newRow[lastOccupiedIndex] = '';
        return newRow;
      });
    });
  }

  function onSubmitGuess() {
    const guess = board[currentRow].join("").toLowerCase();
    if (guess.length < WORD_SIZE) {
      alert('not enough letters!'); // TODO: Make modal
      return;
    }

    if (!wordList.includes(guess)) {
      alert('word not in dictionary!'); // TODO: Make modal
      return; 
    }

    if (guess === winnerWord) {
      setIsGameRunning(false);
    } 
    
    setCurrentRow(prevRow => prevRow+1);
  }

  function getGameOverMessage() {
    const lastGuess = board[currentRow-1].join("").toLowerCase();
    if (lastGuess === winnerWord) return "¡Ganaste!";
    else return `Perdiste. La palabra era ${winnerWord}`;
  }

  return (
    <>
      <h1 className="title">Wordle</h1>
      <Board 
        currentRow={currentRow}
        board={board}
        winnerWord={winnerWord}
      />
      <Keyboard 
        onLetterPress={onLetterPress}
        onDeletePress={onDeletePress}
        onSubmitGuess={onSubmitGuess}
      />

      { !isGameRunning && (
        <>
        <GameOverModal message={getGameOverMessage()}/>
        <div className="modal-overlay"></div>
        </>
      )}
    </>
  );
}

export default App;
