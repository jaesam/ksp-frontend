import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

  return (
    <React.Fragment>
      <header className="video-header">
        <video
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          muted
        />
        <CSSTransition in={inProp} timeout={2000} classNames="header-animation">
          <div className="viewport-header">
            <h1>
              한국 철강의 자존심
              <span>KSP STEEL</span>
            </h1>
          </div>
        </CSSTransition>
      </header>

      <main>
        <section className="section1">
          <p>거래처</p>
        </section>
        <section className="section2">
          <p>강점</p>
        </section>
        <footer>
          <h1>Contact Us</h1>
        </footer>
      </main>
    </React.Fragment>
  );
}

export default Home;
