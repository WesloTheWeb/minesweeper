import { useDispatch } from 'react-redux';
import { setDifficulty } from '../../store/gameSlice';
import classes from './DifficultyButton.module.scss';

interface DifficultyButtonProps {
    title: 'Easy' | 'Casual' | 'Standard' | 'Hard'; // being specific of types
    mode: string;
}

const DifficultyButton = ({ title, mode }: DifficultyButtonProps) => {

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(setDifficulty(title as 'Easy' | 'Casual' | 'Standard' | 'Hard'));
    };

    return (
        <button 
            className={classes.buttonProperties} 
            onClick={handleButtonClick}
        >
            {title} - {mode}
        </button>
    );
};

export default DifficultyButton;