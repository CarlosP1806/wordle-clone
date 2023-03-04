import React from 'react';

export default function GameOverModal({ message }) {
  return (
    <div className="modal">
      <div className="modal__message">
        {message}
      </div>
      <button className="modal__button" onClick={() => { window.location.reload(); }}>
        Nuevo
      </button>
    </div>
  );
}
