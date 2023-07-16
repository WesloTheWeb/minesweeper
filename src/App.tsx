import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import './App.scss';
import ModeSelector from './components/ModeSelector/ModeSelector';
import GameBoard from './containers/GameBoard/GameBoard';

function App() {
  const { difficulty } = useSelector((state: RootState) => state.game);

  return (
    <>
      <section className='introduction'>
        <h1>Minesweeper Game</h1>
        <p>
          Welcome to Minesweeper. Please select a mode. This app is best on web browsers due to screen
          size of the board. Mobile is restricted to 4x4 board.
        </p>
      </section>
      <div>
        <ModeSelector />
      </div>
      {difficulty !== null && <GameBoard />}
    </>
  )
}

export default App;