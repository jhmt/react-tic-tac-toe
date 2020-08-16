import React, {useState} from 'react';
import { Square } from './Square';
import './Board.css';

export const Board = () => {
    const initialSquares: Array<string> = new Array<string>(9).fill('');
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClickEvent = (i: number) => {
        const newSquares = [...squares];
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let line of lines) {
            const [a, b, c] = line;

            if (squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]) {
                    return squares[a];
                }
        }

        return null;
    };

    const winner = calculateWinner(squares);
    const status = winner
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const renderSquares = (count: number, start: number) => {
        const squaresToRender: any = [];
        for (let i = 0; i < count; i++) {
            const index = start + i;
            squaresToRender.push(
                <Square
                    key={index}
                    value={squares[index]}
                    onClickEvent={() => handleClickEvent(index)}>
                </Square>
            );
        }
        return (
            <>
                {squaresToRender}
            </>
        );
    };

    return (
        <div>
            <div className="status">{status}</div>
            <div
                className="board-row">
                {renderSquares(3, 0)}
            </div>
            <div
                className="board-row">
                {renderSquares(3, 3)}
            </div>
            <div
                className="board-row">
                {renderSquares(3, 6)}
            </div>
        </div>
    );
};