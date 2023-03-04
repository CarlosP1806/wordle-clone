import React from 'react';
import { removeSpecialChars } from '../utils';
import LetterTile from './LetterTile';

export default function GuessRow({
  rowNumber,
  board,
  submitted,
  winnerWord
}) {

  function determineTileStatus(position) {
    if (!submitted) return 'inactive';
    if (board[rowNumber][position].toLowerCase() === winnerWord[position]) return 'correct';
    if (winnerWord.includes(board[rowNumber][position].toLowerCase())) return 'partial';
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
