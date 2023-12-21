import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  const updateGreeting = () => {
    const newGreeting = document.getElementById("greeting-message").value;
    setGreeting(newGreeting);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          // ลองใช้ placeholder แบบที่ครูน็อตมีสอนเพิ่มครับ รู้สึกสวยงามดี
          placeholder="Enter Message Here"
        />
      </div>

      <div className="buttons">
        <button onClick={updateGreeting}>Update text</button>
      </div>
    </div>
  );
}

export default App;
