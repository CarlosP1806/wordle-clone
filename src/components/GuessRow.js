import React from 'react';
import LetterTile from './LetterTile';

import { useBoard } from '../context/BoardContext';

export default function GuessRow({
  rowNumber,
  submitted
}) {

  const { board, winnerWord } = useBoard()

  function determineTileStatus(position) {
    if (!submitted) return 'inactive';

    const guessedWord = board[rowNumber].join("").toLowerCase();
    const guessedLetter = guessedWord[position];

    if (guessedLetter === winnerWord[position]) return 'correct';

    if (winnerWord.includes(guessedLetter)) {
      let numberRepetitions = 0;
      for (let i = 0; i <= position; i++) {
        if (guessedWord[i] === guessedLetter) numberRepetitions++;
      }  

      let numberCorrectPositionings = 0;
      for (let i = 0; i < guessedWord.length; i++) {
        if (guessedLetter === guessedWord[i] && guessedLetter === winnerWord[i])
          numberCorrectPositionings++;
      }

      const appereancesInWinnerWord = winnerWord.split(guessedLetter).length - 1;
      if (numberRepetitions <= appereancesInWinnerWord - numberCorrectPositionings) return 'partial';
    }

    return 'incorrect';
  }

  return (
    <div className={`guess_row`}>
      <LetterTile letter={board[rowNumber][0]} status={determineTileStatus(0)}/>
      <LetterTile letter={board[rowNumber][1]} status={determineTileStatus(1)}/>
      <LetterTile letter={board[rowNumber][2]} status={determineTileStatus(2)}/>
      <LetterTile letter={board[rowNumber][3]} status={determineTileStatus(3)}/>
      <LetterTile letter={board[rowNumber][4]} status={determineTileStatus(4)}/>
    </div>
  );
}
