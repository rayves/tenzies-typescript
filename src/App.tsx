import './App.scss';
import Die from './components/Die';
import { generateRandomNumber } from './common/helperMethods';

function App() {
  const dies = [...Array(10).keys()].map((num) => {
    return <Die key={num} value={generateRandomNumber(6)} />;
  });
  return (
    <main>
      <div className="game-container">
        <header>
          <h1>Tenzies</h1>
        </header>
        <div className="die-container">{dies}</div>
      </div>
    </main>
  );
}

export default App;
