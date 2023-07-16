import React from 'react';
import classes from './TileBlock.module.scss';

interface TileProps {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;
    onLeftClick: () => void;
    onRightClick: (event: React.MouseEvent) => void;
}

const TileBlock = ({ isMine, isRevealed, isFlagged, adjacentMines, onLeftClick, onRightClick }: TileProps) => {
    let content = '';

    if (isRevealed) {
        if (isMine) {
            content = '💣';
        } else if (adjacentMines > 0) {
            content.toString();
        };
    } else if (isFlagged) {
        content = '🚩';
    };

    return (
        <button
            className={`${classes.tile} ${classes[`adjacent-${adjacentMines}`]} ${isRevealed ? classes.revealed : ''}`}
            onClick={onLeftClick}
            onContextMenu={onRightClick}
        >
            {content}
        </button>
    );
};

export default TileBlock;