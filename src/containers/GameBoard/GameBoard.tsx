import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import TileBlock from '../../components/TileBlock/TileBlock';
import classes from './GameBoard.module.scss';
import { revealTile, flagTile } from '../../store/gameSlice';

const GameBoard = ({ }) => {

    const { grid, difficulty } = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const handleLeftClick = (rowIndex: number, colIndex: number) => {
        dispatch(revealTile({ rowIndex, colIndex }));
    };

    const handleRightClick = (event: React.MouseEvent, rowIndex: number, colIndex: number) => {
        event.preventDefault();
        dispatch(flagTile({ rowIndex, colIndex }));
    };

    return (
        <section className={classes[`gameBoard_${difficulty}`]}>
            {grid.map((row, rowIndex) => (
                row.map((tile, colIndex) => (
                    <TileBlock
                        key={`${rowIndex}-${colIndex}`}
                        isMine={tile.isMine}
                        isRevealed={tile.isRevealed}
                        isFlagged={tile.isFlagged}
                        adjacentMines={tile.adjacentMines}
                        onLeftClick={() => handleLeftClick(rowIndex, colIndex)}
                        onRightClick={(event) => handleRightClick(event, rowIndex, colIndex)}
                    />
                ))
            ))}
        </section>
    );
};

export default GameBoard;