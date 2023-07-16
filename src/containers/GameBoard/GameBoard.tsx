import { useSelector } from 'react-redux';
import gameSlice from '../../store/gameSlice';

const GameBoard = ({ }) => {

    const renderBoard = useSelector(state => gameSlice.grid);

    return (
        <section>

        </section>
    );
};

export default GameBoard;