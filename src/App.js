import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Square({ value, onClickSquare }) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(0);
  const [result, setResult] = useState(null);
  // 0 = X
  // 1 = O

  function handleClick(value) {
    const newArray = [...squares];

    if (result === null && squares[value] === null) {
      if (player === 0) {
        newArray[value] = "X";
      } else {
        newArray[value] = "O";
      }
      setSquares(newArray);
      setPlayer(player ? 0 : 1);
      checkWinner(newArray);
    } 
    
    
  }

  function checkWinner(squares){
    const winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let i = 0 ; i < winCombo.length; i++){
      const [a,b,c] = winCombo[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return setResult(squares[a]);
      }
    }
    return null;
  }

  function handleReset(){
    const newArray = Array(9).fill(null);
    setSquares(newArray);
    setPlayer(0)
    setResult(null)
  }

  return (
    <div className="container">
      <div className="board-row">
        {
          result ?
          <h1>Winner : {result}</h1>
          :
          <h2>Next Player : {player ? "O" : "X"}</h2>
        }
      </div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onClickSquare={() => handleClick(0)} />
          <Square value={squares[1]} onClickSquare={() => handleClick(1)} />
          <Square value={squares[2]} onClickSquare={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClickSquare={() => handleClick(3)} />
          <Square value={squares[4]} onClickSquare={() => handleClick(4)} />
          <Square value={squares[5]} onClickSquare={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onClickSquare={() => handleClick(6)} />
          <Square value={squares[7]} onClickSquare={() => handleClick(7)} />
          <Square value={squares[8]} onClickSquare={() => handleClick(8)} />
        </div>
      </div>
      <div className="side bar">
        <button className="reset-btn"  onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Board;
