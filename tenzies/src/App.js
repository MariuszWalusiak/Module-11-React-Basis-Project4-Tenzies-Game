import { useState } from "react";
import Die from "./components/Die";
import {nanoid} from "nanoid"


function App() {

  
  const allNewDice = () => {
    const diceArray=[]
    for(let i=0; i < 10; i++) {
      diceArray.push({
         value: Math.ceil(Math.random() * 6),
         isHeld: false,
         id:nanoid()
        })
      
    }
    
    return diceArray
  } 
  
  const [dice, setDice] = useState(allNewDice())
  
  const handleClickRollDice = () =>{
    setDice(allNewDice())
  }

  const holdDice = (id) => {
    console.log(id)
  }
  
  
  const diceElements = dice.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

  
  return (
      <main>
        <div className="grid-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={handleClickRollDice}>Roll</button>
      </main>
  );
}

export default App;

