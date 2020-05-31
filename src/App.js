import React from 'react';
import './App.css';

function App() {
  return (
    <article className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fetus version of KSP Website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <section className="bgv-container">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay controls />
      </section>
      <section className="section2">
        <p>
          거래처
        </p>
      </section>
      <section className="section3">
        <p>
          강점
        </p>
      </section>
      <footer>
        <h1>Contact Us</h1>
      </footer>
    </article>
  );
}

export default App;
