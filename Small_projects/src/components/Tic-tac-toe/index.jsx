import { useEffect, useState } from 'react';
import './styles.css'


function Square({ value, onClick }) {
    return (
        <button onClick={onClick} className="square" >{value}</button>
    )
}
export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState('');
    const [showRestartButton, setShowRestartButton] = useState(false);

    function hanldeOnClick(currentSquareidx) {
        const copyArr = [...squares];
        if (getWinner(copyArr) || copyArr[currentSquareidx]) return;
        copyArr[currentSquareidx] = isXTurn ? 'X' : 'O';
        setIsXTurn(!isXTurn);
        setSquares(copyArr);
        // console.log(value);
    }
    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];   // for i = 3 , x= 0, y= 3, z= 6;

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                setShowRestartButton(true);
                return squares[x];
            }
        }
        return null;

    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            // setShowRestartButton(true);
            setStatus('This is a DRAW, Please Restart!!');
        } else if (getWinner(squares)) {
            // setShowRestartButton(true);
            setStatus(`Winner is ${getWinner(squares)} , Please Restart the game`);
        } else {
            // 
            setStatus(`Next turn is of player : ${isXTurn ? 'X' : 'O'}`);
        }
    }, [squares], [isXTurn]);

    const handleRestart=()=>{
        setSquares(Array(9).fill(""));
        setStatus('');
    }
    return (
        <div className='tic-tac-toe' >
            <div className="tic-tac-toe-container" >
                <div className="row">
                    <Square value={squares[0]} onClick={() => hanldeOnClick(0)} />
                    <Square value={squares[1]} onClick={() => hanldeOnClick(1)} />
                    <Square value={squares[2]} onClick={() => hanldeOnClick(2)} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => hanldeOnClick(3)} />
                    <Square value={squares[4]} onClick={() => hanldeOnClick(4)} />
                    <Square value={squares[5]} onClick={() => hanldeOnClick(5)} />
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => hanldeOnClick(6)} />
                    <Square value={squares[7]} onClick={() => hanldeOnClick(7)} />
                    <Square value={squares[8]} onClick={() => hanldeOnClick(8)} />
                </div>
                <h2>{status}</h2>
                {
                    showRestartButton ? <button className='btn' onClick={handleRestart} >Restart</button> : null
                }
            </div>
        </div>
    )
}