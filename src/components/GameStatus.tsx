import React from "react";

interface GameStatusProps {
  status: string;
}

const GameStatus: React.FC<GameStatusProps> = ({ status }) => {
  return (
    <p data-testid="gameStatus" className="status">
      {status}
    </p>
  );
};

export default GameStatus;
