import { useState } from "react";
import Die from "./components/Die";


function App() {

  
  const allNewDice = () => {
    const diceArray=[]
    for(let i=0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6))
    }
    return diceArray
  } 

  const [dice, setDice] = useState(allNewDice())
  
  const diceElements = dice.map(die => <Die value={die} />)

  const handleClick = () =>{
    setDice(allNewDice())
  }
  
  return (
      <main>
        <div className="grid-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={handleClick}>Roll</button>
      </main>
  );
}

export default App;

