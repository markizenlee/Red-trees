import React, { useEffect, useState } from "react";
import "./App.css";
import sampleImage from "./assets/sample.png";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
      <div>
        <section className="hero">
          <h1 className="text">
            [Red Trees Description Text Goes Here.]
          </h1>
        </section>

        <section className="image-section">
          <img src={sampleImage} alt="Sample Image" className="full-image" />
        </section>
      </div>
  );
}

export default App;
