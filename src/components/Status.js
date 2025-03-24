import React from 'react';

const Status = ({ winner, currentPlayer }) => {
  if (winner) {
    return <div className="status">O vencedor é: {winner}</div>;
  }

  return <div className="status">Jogador atual: {currentPlayer}</div>;
};

export default Status;