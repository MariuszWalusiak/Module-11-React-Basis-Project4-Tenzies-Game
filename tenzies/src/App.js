import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const allNewDice = () => {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  };

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const areAllHold = dice.every((die) => die.isHeld === true);
    const firstNumber = dice[0].value;
    const areAllNumbersTheSame = dice.every((die) => die.value === firstNumber);
    if (areAllHold && areAllNumbersTheSame) {
      setTenzies(true);
      console.log("you won");
    }
  }, [dice]);

  const handleClickRollDice = () => {
    setDice((prevArray) =>
      prevArray.map((die) => {
        return die.isHeld === true
          ? die
          : {
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
              id: nanoid(),
            };
      })
    );
  };

  const holdDice = (id) => {
    setDice((preDice) =>
      preDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  const startNewGame = () => {
    setTenzies(false);
    setDice(allNewDice());
  };
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid-container">{diceElements}</div>
      <button
        className="roll-dice"
        onClick={tenzies ? startNewGame : handleClickRollDice}
      >
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
