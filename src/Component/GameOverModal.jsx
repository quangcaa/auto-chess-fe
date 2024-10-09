import React from "react";
import "./gameOverModal.css"; // Create this CSS file for styling

const GameOverModal = ({ winner, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Over</h2>
        <p>{winner} wins!</p>
        <button onClick={onClose}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOverModal;
