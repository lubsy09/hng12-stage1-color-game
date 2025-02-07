import React from "react";

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div
      className="color-box"
      data-testid="colorBox"
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorBox;
