import React, { useState, useEffect ,useCallback} from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import './ChessGame.css';
import CountdownTimer from './CountdownTimer';
import GameOverModal from './GameOverModal';

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [highlightedSquares, setHighlightedSquares] = useState({});
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);
  const [isWhiteTimerRunning, setIsWhiteTimerRunning] = useState(true); 
  const [isBlackTimerRunning, setIsBlackTimerRunning] = useState(false); // Black's timer is initially paused
  const [winner, setWinner] = useState(null);
  const [whiteTimerKey, setWhiteTimerKey] = useState(0); // Add key for white timer
  const [blackTimerKey, setBlackTimerKey] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [Fen,setFen] = useState(["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq - 0 1"]);
  const audio = new Audio('./sfx/capture.mp3');

  const getMoveOptions = (square) => {
    const moves = game.moves({
      square,
      verbose: true
    });
    if (moves.length === 0) {
      setHighlightedSquares({});
      return false;
    }
    const newSquares = {};
    moves.forEach((move) => {
      newSquares[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
            : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
        borderRadius: "50%",
      };
    });
    newSquares[square] = {
      background: "rgba(255, 255, 0, 0.4)",
    };
    setHighlightedSquares(newSquares);
    return true;
  };

  const onDrop = (sourceSquare, targetSquare, piece) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: piece[1]?.toLowerCase() ?? "q",
    });
    if (move === null) {
      return false;
    }

    setGame(gameCopy);
    setFen(gameCopy.fen());
    setHighlightedSquares({});
    setMoveHistory((prevHistory) => [...prevHistory, move.san]);
    return true;
  };

  const onSquareClick = (square) => {
    const piece = game.get(square);
    if (selectedPiece && highlightedSquares[square]) {
      const move = game.move({
        from: selectedPiece,
        to: square,
        promotion: piece[1]?.toLowerCase() ?? "q",
      });
      if (move) {
        setMoveHistory((prevHistory) => [...prevHistory, move.san]);
        setGame(new Chess(game.fen())); // Update the game state
        setFen(game.fen());
        setHighlightedSquares({}); // Clear highlighted squares after move
        setSelectedPiece(null); // Deselect piece
      }
    } else {
      const pieceSelected = game.get(square);
      if (pieceSelected) {
        setSelectedPiece(square);
        getMoveOptions(square);
      } else {
        setSelectedPiece(null);
        setHighlightedSquares({});
      }
    }
  };

  const renderMoveHistory = () => {
    const moveLines = [];
    for (let i = 0; i < moveHistory.length; i += 2) {
      moveLines.push(
        <div key={i}>
          {moveHistory[i]} {moveHistory[i + 1] ? moveHistory[i + 1] : ""}
        </div>
      );
    }
    return moveLines;
  };

  const handleTimeout = useCallback((color) => {
    if (color === 'white') {
      setWinner('Black');
    } else {
      setWinner('White');
    }
    setIsWhiteTimerRunning(false);
    setIsBlackTimerRunning(false); 
    setIsGameOver(true);
    setGame(new Chess()); // Stop both timers on timeout
  }, []); 

  const resetGame = () => {
    setGame(new Chess());
    setHighlightedSquares({});
    setSelectedPiece(null);
    setMoveHistory([]);
    setIsGameOver(false)
    setIsWhiteTimerRunning(true); // Reset timers to initial state
    setIsBlackTimerRunning(false);
    setWinner(null);
    setWhiteTimerKey(prevKey => prevKey + 1); // Force remount of white timer
    setBlackTimerKey(prevKey => prevKey + 1); 
  };

  const undoGame = () => {
    if (moveHistory.length > 0) {
      const lastMove = moveHistory.pop();
      setMoveHistory(moveHistory);
      setGame(new Chess(game.fen()));
      setHighlightedSquares({});
      setSelectedPiece(null);
      setMoveHistory((prevHistory) => [...prevHistory, lastMove]);
    }
  }
  useEffect(() => {
    if (game.turn() === 'w') {
      setIsWhiteTimerRunning(true);
      setIsBlackTimerRunning(false);
    } else {
      setIsWhiteTimerRunning(false);
      setIsBlackTimerRunning(true);
    }
    if (game.isCheckmate()) {
      audio.play();
      setGame(new Chess());
      setMoveHistory([]);
      setIsGameOver(true);
      setIsWhiteTimerRunning(false);
      setIsBlackTimerRunning(false);
      setWinner(game.turn() === 'w' ? 'Black' : 'White'); // Opposite of the current turn wins
    }
  }, [game]);

  return (
    <div className="chess-container">
      {isGameOver && <GameOverModal winner={winner} onClose={resetGame} />}
      <div className="left-panel">
        <div className="timer">
          <CountdownTimer
            key={blackTimerKey}
            initialMinutes={10}
            initialSeconds={0}
            isRunning={isBlackTimerRunning}
            onTimeout={() => handleTimeout('black')}
          />
        </div>
      
          
        
        <div className="chessboard">
        
         <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
          customDarkSquareStyle={{
            backgroundColor: "#779952",
          }}
          customLightSquareStyle={{
            backgroundColor: "#edeed1",
          }}
          onSquareClick={onSquareClick}
          customSquareStyles={highlightedSquares}
          showPromotionDialog={true}
          />
        </div>
        <div className="timer">
          
          <CountdownTimer
            key={whiteTimerKey}
            initialMinutes={10}
            initialSeconds={0}
            isRunning={isWhiteTimerRunning}
            onTimeout={() => handleTimeout('white')}
          />
        </div>
      </div>
      <div className="right-panel">
      <div style={{ marginTop: "20px" }}>
        <button onClick={resetGame}>Reset Game</button>
        <button onClick={undoGame}>Undo</button>
      </div>
      <div>
        <p>Turn: {game.turn() === 'w' ? 'White' : 'Black'}</p>
        <p>Winner: {winner ? `${winner} wins!` : "No winner yet"}</p>
        <p>FEN: {Fen}</p>
        <p>Move History:</p>
        <div>{renderMoveHistory()}</div>
      </div>
      </div>
    </div>
  );
};

export default ChessGame;
