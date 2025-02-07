import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import Scoreboard from "./components/Scoreboard";
import GameStatus from "./components/GameStatus";
import "./App.css";

const COLORS: string[] = ["red", "blue", "green", "yellow", "purple", "orange"];

function App() {
  const [targetColor, setTargetColor] = useState<string>(getRandomColor());
  const [colorOptions, setColorOptions] = useState<string[]>(
    shuffleColors([...COLORS])
  );
  const [score, setScore] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<string>("");

  function getRandomColor(): string {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function shuffleColors(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleGuess(color: string): void {
    if (color === targetColor) {
      setGameStatus("Correct! 🎉");
      setScore((prev) => prev + 1);
      // Reset target color only on correct guess
      setTargetColor(getRandomColor());
      setColorOptions(shuffleColors([...COLORS])); // Also shuffle options
    } else {
      setGameStatus("Wrong! Try again. ❌");
    }
  }

  function handleNewGame(): void {
    setScore(0);
    setTargetColor(getRandomColor());
    setColorOptions(shuffleColors([...COLORS]));
    setGameStatus("");
  }

  return (
    <div className="container">
      <h1>Color Game</h1>
      <p data-testid="gameInstructions">Guess the correct color!</p>
      <ColorBox color={targetColor} />
      <ColorOptions options={colorOptions} handleGuess={handleGuess} />
      <GameStatus status={gameStatus} />
      <Scoreboard score={score} />
      <button onClick={handleNewGame} data-testid="newGameButton">
        New Game
      </button>
    </div>
  );
}

export default App;
