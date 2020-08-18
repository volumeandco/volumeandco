import React from 'react';
import logo from './assets/eventfund-logo.png';
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
            We work with live event and experience producers to catalyze growth without compromising their creative vision.
          </p>

          <p>
            In addition to capital, we provide a suite of financial tools to maximize production efficiency, encourage transparency and accountability between stakeholders, and boost event profitability.
          </p>

          <p>
            Our systems may also allow for pre-settlement with select ticketing partners and downside protection in the event of cancelation or loss.
          </p>
        </div>

        <a href="mailto:jon@primaryendeavors.com">
          <button
            className="App-contact-button"
          >
            Contact
          </button>
        </a>
      </header>

      <footer>
        <p className="footer-line">
          &copy; 2020, -- Primary Endeavors, LLC
        </p>
      </footer>
    </div>
  );
}

export default App;
