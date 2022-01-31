import Die from "./components/Die";

const allNewDice = () => {
  const diceArray=[]
  for(let i=0; i < 10; i++) {
    diceArray.push(Math.ceil(Math.random() * 6))
  }
  return diceArray
} 
console.log(allNewDice())


function App() {
  return (
      <main>
        <div className="grid-container">
          <Die value={1} />
          <Die value={1} />
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1}/>
          <Die value={1} />
          <Die value={1}/>
          <Die value={1}/>
        </div>
      </main>
  );
}

export default App;
