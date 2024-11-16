import { useState } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState<string>("");

  return (
    <>
      <div className="count">{string.length}</div>
      <div>
        <textarea
          value={string}
          autoComplete="off"
          onChange={(e) => setString(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default App;
