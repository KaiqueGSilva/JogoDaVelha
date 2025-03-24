import React from 'react';

const ScoreBoard = ({ score }) => {
  return (
    <div className="scoreboard">
      <div>Jogador X: {score.X}</div>
      <div>Jogador O: {score.O}</div>
    </div>
  );
};

export default ScoreBoard;
