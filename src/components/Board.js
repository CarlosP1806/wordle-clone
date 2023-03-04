import React from 'react';
import GuessRow from './GuessRow';

export default function Board({
  board,
  winnerWord,
  currentRow,
}) {

  return (
    <div className="board">
      <GuessRow 
        rowNumber={0} 
        board={board} 
        winnerWord={winnerWord}
        submitted={currentRow > 0}
      />

      <GuessRow 
        rowNumber={1} 
        board={board} 
        winnerWord={winnerWord}
        submitted={currentRow > 1}
      />

      <GuessRow 
        rowNumber={2} 
        board={board} 
        winnerWord={winnerWord}
        submitted={currentRow > 2}
      />

      <GuessRow 
        rowNumber={3} 
        board={board} 
        winnerWord={winnerWord}
        submitted={currentRow > 3}
      />

      <GuessRow 
        rowNumber={4} 
        board={board} 
        winnerWord={winnerWord}
        submitted={currentRow > 4}
      />
    </div>
  );
}
