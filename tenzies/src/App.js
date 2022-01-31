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
  console.log(dice)
  
  
  const diceElements = dice.map(die => <Die value={die.value} key={die.id}/>)

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

