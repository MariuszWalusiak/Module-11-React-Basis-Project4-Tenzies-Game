import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

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
  const [tenzies,setTenzies] = useState(false)

  useEffect(() => {
    console.log("Dice state changed")
  },[dice])

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


  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid-container">{diceElements}</div>
      <button className="roll-dice" onClick={handleClickRollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
