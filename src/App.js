import React from 'react';
import logo from './assets/VolCo_Logo_Mermaid_White.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-wrapper">
          <img src={logo} alt="volume-&-co-logo" />
        </div>
        
        <div className="App-tagline-wrapper">
          <p>
            We believe in the power of experiences.
          </p>

          <p>
            We work with independent live event producers to catalyze growth without compromising their creative vision.
          </p>
        </div>

        <a href="mailto:hi@volumeandco.com">
          <button
            className="App-contact-button"
          >
            Contact
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
