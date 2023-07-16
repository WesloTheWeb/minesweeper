import classes from './DifficultyButton.module.scss';

const { buttonpProperties } = classes;

interface DifficultyButtonProps {
    title: string;
    mode: string;
}

const DifficultyButton = ({ title, mode }: DifficultyButtonProps) => {


    return (
        <button className={buttonpProperties}>
            {title} - {mode}
        </button>
    );
};

export default DifficultyButton;