import React from 'react';
import './App.css';

// create index.js to export as a directory for refactoring
import NavItem from './components/navbar/NavItem';
import DropdownMenu from './components/navbar/DropdownMenu';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <article>
      <Navbar>
        <NavItem icon="회사소개" />
        <NavItem icon="제품소개" />
        <NavItem icon="Contact" />
        <NavItem icon="😃">
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <section className="bgv-container">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay />
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
