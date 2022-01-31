import Die from "./components/Die";


function App() {
  return (
      <main>
        <div className="grid-container">
          <Die value={Math.floor(Math.random() * 6) + 1} />
          <Die value={Math.floor(Math.random() * 6) + 1} />
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1} />
          <Die value={Math.floor(Math.random() * 6) + 1}/>
          <Die value={Math.floor(Math.random() * 6) + 1}/>
        </div>
      </main>
  );
}

export default App;
