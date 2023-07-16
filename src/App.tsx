import ModeSelector from './components/ModeSelector/ModeSelector'
import './App.scss'


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

    </>
  )
}

export default App
