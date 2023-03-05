import React from 'react';
import { useBoard } from '../context/BoardContext';
import GuessRow from './GuessRow';

export default function Board() {

  const { currentRow } = useBoard();

  return (
    <div className="board">
      <GuessRow 
        rowNumber={0} 
        submitted={currentRow > 0}
      />

      <GuessRow 
        rowNumber={1} 
        submitted={currentRow > 1}
      />

      <GuessRow 
        rowNumber={2} 
        submitted={currentRow > 2}
      />

      <GuessRow 
        rowNumber={3} 
        submitted={currentRow > 3}
      />

      <GuessRow 
        rowNumber={4} 
        submitted={currentRow > 4}
      />
      
      <GuessRow 
        rowNumber={5} 
        submitted={currentRow > 5}
      />
    </div>
  );
}
