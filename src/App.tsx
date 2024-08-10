import './App.scss';
import { useEffect, useState } from 'react';
import Die from './components/Die';
import { DieData } from './common/types';
import { allNewDice, generateRandomNumber } from './common/helperFunctions';
import Confetti from 'react-confetti';

function App() {
  const [tenzies, setTenzies] = useState<boolean>(false);
  const [dice, setDice] = useState<DieData[]>(allNewDice());

  function rollDice(): void {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice());
    } else {
      setDice((prevDice) => {
        return prevDice.map((die) => {
          return die.isHeld ? die : { ...die, value: generateRandomNumber(6) };
        });
      });
    }
  }

  function holdDie(id: string): void {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const diceElements: JSX.Element[] = dice.map((die) => {
    return <Die dieProps={die} key={die.id} holdDie={holdDie} />;
  });

  useEffect(() => {
    const startDieValue = dice[0].value;
    for (const die of dice) {
      if (!die.isHeld || die.value !== startDieValue) return;
    }
    setTenzies(true);
    console.log('You Won!');
  }, [dice]);

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="game-container">
        <header className="header-container">
          <h1 className="header-title">Tenzies</h1>
          <p className="header-text">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </header>
        <div className="die-container">{diceElements}</div>
        <button className="die-roll" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </div>
    </main>
  );
}

export default App;
