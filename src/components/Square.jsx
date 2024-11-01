

export default function Square({value, onSquareClick, isDisabled}) {

    console.log(value)
 
    return (
        <>
            <button onClick={onSquareClick} className="square">{value} </button>
        </>
    )
}