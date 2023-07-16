import ModeSelector from './components/ModeSelector/ModeSelector';
import './App.scss';
import TileBlock from './components/TileBlock/TileBlock';


function App() {

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
      <TileBlock />

    </>
  )
}

export default App
