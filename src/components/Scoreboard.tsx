import React from "react";

interface ScoreboardProps {
  score: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ score }) => {
  return (
    <p data-testid="score" className="score">
      Score: {score}
    </p>
  );
};

export default Scoreboard;
