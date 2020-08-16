import React from 'react';
import './Game.css';
import { Board } from './Board';

export const Game = () => {
    return (
        <div
            className="game">
            Tic-Tac-Toe
            <Board></Board>
        </div>
    );
};