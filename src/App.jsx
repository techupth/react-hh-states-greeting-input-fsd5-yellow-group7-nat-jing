import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="greeting-container">Greeting Message</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input id="greeting-message" type="text" />
      </div>

      <div className="buttons">
        <button>Update text</button>
      </div>
    </div>
  );
}

export default App;
