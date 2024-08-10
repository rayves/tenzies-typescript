import './App.scss';
import { useState } from 'react';
import Die from './components/Die';
import { DieData } from './common/types';
import { generateNewDie, generateRandomNumber } from './common/helperFunctions';

function App() {
  const [dice, setDice] = useState<DieData[]>(
    Array.from({ length: 10 }, () => {
      return generateNewDie();
    }),
  );

  function reRollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld ? die : { ...die, value: generateRandomNumber(6) };
      });
    });
  }

  function holdDie(id: string) {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElements: JSX.Element[] = dice.map((die) => {
    return <Die dieProps={die} key={die.id} holdDie={holdDie} />;
  });

  return (
    <main>
      <div className="game-container">
        <header className="header-container">
          <h1 className="header-title">Tenzies</h1>
          <p className="header-text">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </header>
        <div className="die-container">{diceElements}</div>
        <button className="die-roll" onClick={reRollDice}>
          Roll
        </button>
      </div>
    </main>
  );
}

export default App;
