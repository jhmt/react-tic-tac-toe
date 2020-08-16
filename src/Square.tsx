import React from 'react';
import './Square.css';

interface SquareProps {
    value: string;
    onClickEvent: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Square: React.FC<SquareProps> = (props) => {
    return (
        <button
            className="square"
            onClick={props.onClickEvent}>
            {props.value}
        </button>
    );
};