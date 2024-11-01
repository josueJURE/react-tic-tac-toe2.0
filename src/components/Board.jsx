import { useState } from "react";
import Square from "./Square.jsx";


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsnext] = useState(true);
  const [disabled, setDisabled] = useState(false);
 
  function handleClick(value) {
    const nextSquare = [...squares]
    if (squares[value]) {
      return
    }
     isNext ? nextSquare[value] = "X" : nextSquare[value] = "0";
   
      setIsnext(!isNext)
      setSquares(nextSquare)
      setDisabled(true)
  }


  return (
    <>
    <div className="board-row">
    {Array.from({length: 3}).map((_, index) => {
      return <Square key={index} onSquareClick={() => handleClick(index)} value={squares[index]} isDisabled={disabled} />
    })}
     
      </div>
      
      <div className="board-row">
      {Array.from({length: 3}).map((_, index) => {
        const adjustedIndex = index + 3;  // Start index from 3
      return <Square  key={adjustedIndex}  onSquareClick={() => handleClick(adjustedIndex)} value={squares[adjustedIndex]} isDisabled={disabled}  />
    })}
      </div>
      <div className="board-row">
      {Array.from({length: 3}).map((_, index) => {
        const adjustedIndex = index + 6;  // Start index from 3
        
      return <Square  key={adjustedIndex} onSquareClick={() => handleClick(adjustedIndex)} value={squares[adjustedIndex]} isDisabled={disabled} />
    })}
     
      </div>
   
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}