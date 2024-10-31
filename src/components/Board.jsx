import { useState } from "react";
import Square from "./Square.jsx";


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
 
  function handleClick(i) {
    const nextSquare = [...squares]
    
    nextSquare[i] = "X"
      setSquares(nextSquare)
      console.log("clicked");
      console.log(nextSquare)
  }


  return (
    <>
    <div className="board-row">
    {Array.from({length: 3}).map((_, index) => {
      return <Square key={index} onSquareClick={() => handleClick(index)} value={squares[index]} />
    })}
     
      </div>
      <div className="board-row">
      {Array.from({length: 3}).map((_, index) => {
        const adjustedIndex = index + 3;  // Start index from 3
      return <Square  key={adjustedIndex}  onSquareClick={() => handleClick(adjustedIndex)} value={squares[adjustedIndex]} />
    })}
      </div>
      <div className="board-row">
      {Array.from({length: 3}).map((_, index) => {
        const adjustedIndex = index + 6;  // Start index from 3
        
      return <Square  key={adjustedIndex} onSquareClick={() => handleClick(adjustedIndex)} value={squares[adjustedIndex]} />
    })}
     
      </div>
   
    </>
  );
}
