
import { WINNING_COMBINATIONS } from "../winning-combinations";

// export default function GameBoard({onSelectSquare, activePlayerSymbol})
export default function GameBoard({onSelectSquare, turns})
{   
    const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]];
    let  gameBoard=initialGameBoard;
    
    for(const turn of turns)
    {
        const {square, player}=turn;
        const {row, col}=square;
        gameBoard[row][col]=player;
    }
   
    // const [gameBoard, setGameBoard]=useState(initialGameBoard);
    // function handleClick(rowIndex,colIndex)
    // {
    // setGameBoard((prevGameBoard)=>
    // {
    //    const updatedBoard= [...prevGameBoard.map((innerBoard)=>[...innerBoard])];
    //    updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //    return updatedBoard;
    // });
    // onSelectSquare();

    // }

    return (
    <ol id="game-board">
     {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=><li key={colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>)}
        </ol>
     </li>)}
    </ol>);
}