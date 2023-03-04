import React from 'react';

export default function Keyboard({
  onLetterPress,
  onDeletePress,
  onSubmitGuess
}) {

  function handleKeyClick(event) {
    onLetterPress(event.target.textContent);
  }

  return (
    <div className="keyboard">
      <div className="key" onClick={handleKeyClick}>A</div>
      <div className="key" onClick={handleKeyClick}>B</div>
      <div className="key" onClick={handleKeyClick}>C</div>
      <div className="key" onClick={handleKeyClick}>D</div>
      <div className="key" onClick={handleKeyClick}>E</div>
      <div className="key" onClick={handleKeyClick}>F</div>
      <div className="key" onClick={handleKeyClick}>G</div>
      <div className="key" onClick={handleKeyClick}>H</div>
      <div className="key" onClick={handleKeyClick}>I</div>
      <div className="key" onClick={handleKeyClick}>J</div>
      <div className="key" onClick={handleKeyClick}>K</div>
      <div className="key" onClick={handleKeyClick}>L</div>
      <div className="key" onClick={handleKeyClick}>M</div>
      <div className="key" onClick={handleKeyClick}>N</div>
      <div className="key" onClick={handleKeyClick}>Ñ</div>
      <div className="key" onClick={handleKeyClick}>O</div>
      <div className="key" onClick={handleKeyClick}>P</div>
      <div className="key" onClick={handleKeyClick}>Q</div>
      <div className="key" onClick={handleKeyClick}>R</div>
      <div className="key" onClick={handleKeyClick}>S</div>
      <div className="key" onClick={handleKeyClick}>T</div>
      <div className="key" onClick={handleKeyClick}>U</div>
      <div className="key" onClick={handleKeyClick}>V</div>
      <div className="key" onClick={handleKeyClick}>W</div>
      <div className="key" onClick={handleKeyClick}>X</div>
      <div className="key" onClick={handleKeyClick}>Y</div>
      <div className="key" onClick={handleKeyClick}>Z</div>

      <div className="key" onClick={onDeletePress}>Del</div>
      <div className="key key--large" onClick={onSubmitGuess}>Enter</div>
    </div>
  );
}
