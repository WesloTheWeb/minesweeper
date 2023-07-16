import DifficultyButton from '../DiffcultyButton/DifficultyButton';
import classes from './ModeSelector.module.scss';

const { availableModeContainer } = classes;

const ModeSelector = ({ }) => {
    return (
        <section className={availableModeContainer}>
            <DifficultyButton title='Easy' mode='Easy' />
            <DifficultyButton title='Casual' mode='Casual' />
            <DifficultyButton title='Standard' mode='Standard' />
            <DifficultyButton title='Hard' mode='Hard' />
        </section>
    );
};

export default ModeSelector;