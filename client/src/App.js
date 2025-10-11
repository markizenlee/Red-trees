import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
      <div className="container">
        <h1 className="text">
          [Red Trees Description Text Goes Here.]
        </h1>
      </div>
  );
}

export default App;
