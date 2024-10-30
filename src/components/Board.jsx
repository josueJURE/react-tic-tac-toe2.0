
import Square from "./Square.JSX";
export default function Board() {

  return (
    <>
      <div className="board-row">
      <Square number={1}/>
      <Square number={2}/>
      <Square number={3}/>
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
      </div>
      <div className="board-row">
      <Square number={4}/>
      <Square number={5}/>
      <Square number={6}/>
      </div>
      <div className="board-row">
      <Square number={7}/>
      <Square number={8}/>
      <Square number={9}/>
      </div>
    </>
  );
}
