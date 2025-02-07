import React from "react";

interface ColorOptionsProps {
  options: string[];
  handleGuess: (color: string) => void;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({
  options,
  handleGuess,
}) => {
  return (
    <div className="options">
      {options.map((color) => (
        <button
          key={color}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => handleGuess(color)}
          data-testid="colorOption"
        />
      ))}
    </div>
  );
};

export default ColorOptions;
