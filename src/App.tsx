import './App.scss';
import Die from './components/Die';

function App() {
  const dies = [...Array(10).keys()].map((num) => {
    return <Die key={num} />;
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
