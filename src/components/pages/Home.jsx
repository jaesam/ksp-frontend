import React from 'react';

function Home() {
    return (
        <React.Fragment>
            <section className="bgv-container">
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay />
            </section>
            <section className="section1">
                <p>
                    거래처
        </p>
            </section>
            <section className="section2">
                <p>
                    강점
        </p>
            </section>
            <footer>
                <h1>Contact Us</h1>
            </footer>
        </React.Fragment>
    )
}

export default Home;