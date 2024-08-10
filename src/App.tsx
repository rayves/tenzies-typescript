import './App.scss';
import { useState } from 'react';
import Die from './components/Die';
import { DieData } from './common/types';
import { generateRandomNumber } from './common/helperMethods';
import { nanoid } from 'nanoid';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice(): DieData[] {
    return Array.from({ length: 10 }, () => {
      return {
        id: nanoid(),
        value: generateRandomNumber(6),
        isHeld: false,
      };
    });
  }

  const diceElements: JSX.Element[] = dice.map((die) => {
    return <Die props={die} key={die.id} />;
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
