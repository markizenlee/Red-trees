import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import sampleImage from "./assets/sample.png";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll("section");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <div>
        <section className="hero">
          <p className="text">
            text
          </p>
        </section>

        <section className="image-section">
          <img src={sampleImage} alt="Sample Image" className="full-image" />
        </section>
      </div>
    </>
  );
}

export default App;
