import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import GameOverModal from "./components/GameOverModal";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import { useBoard, WORD_SIZE } from "./context/BoardContext";

import { wordList } from './utils';

function App() {

  const { 
    board, 
    setBoard,
    currentRow,
    setCurrentRow,
    winnerWord, 
  } = useBoard();

  const [isGameRunning, setIsGameRunning] = useState(true);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    if (currentRow > 5) {
      setIsGameRunning(false);
    }
  }, [currentRow]);

  console.log(winnerWord);

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
      setModalMessage('Letras insuficientes');
      setShowModalMessage(true);

      setTimeout(() => {
        setShowModalMessage(false);
      }, 3000)
      return;
    }

    if (!wordList.includes(guess)) {
      setModalMessage('Palabra invalida');
      setShowModalMessage(true);
      
      setTimeout(() => {
        setShowModalMessage(false);
      }, 3000)
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
      <h1 className="title">Wordle Clone</h1>
      <Board />
      <Keyboard 
        onLetterPress={onLetterPress}
        onDeletePress={onDeletePress}
        onSubmitGuess={onSubmitGuess}
      />

      <Message message={modalMessage} visible={showModalMessage}/>

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
