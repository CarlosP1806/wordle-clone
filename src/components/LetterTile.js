import React from 'react';

export default function LetterTile({
  letter,
  status
}) {
  return (
    <div className={`tile tile--${status}`}>{letter}</div>  
  );
}
