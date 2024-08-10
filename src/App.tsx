import './App.scss';
import { useState } from 'react';
import Die from './components/Die';
import { generateRandomNumber } from './common/helperMethods';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice(): number[] {
    return Array.from({ length: 10 }, () => generateRandomNumber(6));
  }

  const diceElements: JSX.Element[] = dice.map((die) => {
    return <Die value={die} />;
  });

  return (
    <main>
      <div className="game-container">
        <header>
          <h1>Tenzies</h1>
        </header>
        <div className="die-container">{diceElements}</div>
        <button className="die-roll" onClick={() => setDice(allNewDice())}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
