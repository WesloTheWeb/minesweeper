import DifficultyButton from '../DiffcultyButton/DifficultyButton';
import classes from './ModeSelector.module.scss';

const { availableModeContainer } = classes;

// TODO: Fix Button CSS sizing

const ModeSelector = ({ }) => {
    return (
        <section className={availableModeContainer}>
            <DifficultyButton title='Easy' mode='8 x 8 Grid with 10 bombs' />
            <DifficultyButton title='Casual' mode='16 x 16 Grid with 40 bombs' />
            <DifficultyButton title='Standard' mode='24 x 24 Grid with 99 bombs' />
            <DifficultyButton title='Hard' mode='30 x 30 Grid with 200 bombs' />
        </section>
    );
};

export default ModeSelector;