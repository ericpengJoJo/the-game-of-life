import React from "react";

import { useGameContext } from "../context";
import ContainerWrapper from "./ContainerWrapper";
import "../App.scss";

function GameDisplay({ numCols, numRows }) {
  const { state, dispatch } = useGameContext();
  const { grid } = state;

  const handleGridClick = (row, col) => {
    dispatch({ type: "setGrid", payload: { row, col } });
  };

  return (
    <ContainerWrapper width={20 * 50 + 95} height={20 * 28 + 59}>
      <div
        style={{
          width: 20 * 50 + 3,
          height: 20 * 28 + 5,
          backgroundColor: "#8BC34A",
          border: "8px solid black",
        }}
      >
        <div
          style={{
            display: "grid",
            width: "100%",
            height: "100%",
            gridTemplateColumns: `repeat(${numCols}, ${100 / numCols}%)`,
            gridTemplateRows: `repeat(${numRows}, ${100 / numRows}%)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, j) => (
              <div
                key={`pixel-row-${i}-col-${j}`}
                onClick={() => handleGridClick(i, j)}
                className={`display-pixel-dot ${
                  grid[i][j] ? "pixel-green" : ""
                }`}
              />
            ))
          )}
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default GameDisplay;
