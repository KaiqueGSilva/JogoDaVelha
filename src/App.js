import React, { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    moves: 0,
  });

  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const handleClick = (index) => {
    if (gameState.board[index] || gameState.winner) return;

    const newBoard = gameState.board.slice();
    newBoard[index] = gameState.currentPlayer;

    const winner = calculateWinner(newBoard);
    const nextPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
    const newMoves = gameState.moves + 1;

    if (winner) {
      setScore({
        ...score,
        [winner]: score[winner] + 1,
      });
    }

    setGameState({
      board: newBoard,
      currentPlayer: nextPlayer,
      winner: winner,
      moves: newMoves,
    });
  };

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      moves: 0,
    });
  };

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <Status winner={gameState.winner} currentPlayer={gameState.currentPlayer} />
      <Board board={gameState.board} onClick={handleClick} />
      <button onClick={resetGame}>Reiniciar Jogo</button>
    </div>
  );
};

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default App;