import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "../ContactForm";
import { ReactComponent as ContactUsImage } from "../../icons/contact.svg";
import { ReactComponent as WinnerImage } from "../../icons/winner.svg";
import { ReactComponent as PartnershipImage } from "../../icons/partnership.svg";
import { ReactComponent as EngineerImage } from "../../icons/engineer.svg";
import { ReactComponent as TruckImage } from "../../icons/truck.svg";
import { ReactComponent as TimeImage } from "../../icons/time.svg";

function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className="home">
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
        <section className="about">
          <div className="text-box">
            <h1>초정밀 극박판의 선두주자</h1>
            <p>
              저희는 현재 초정밀 초박판 스테인리스 제품 생산을 위해 생산현장을
              Clean Room화하고있으며, 제품 표면 형상교정 및 균일한 응력 유지에
              필요한 정밀 생산 설비를 도입 하여 지금까지 일본 및 미국 등
              선진국에서 수입해야 했던 첨단 부품소재를 국산화하며 더 나아가 세계
              각국에 수출 하겠다는 야심찬 계획을 실현해 나가고 있습니다.
            </p>
            <p>
              저희 (주)케이에스피스틸은 갈수록 첨단화 고급화되는 각종 산업용
              부품 소재 추세에 발맞추어 생산설비투자 및 연구개발에 박차를 가하여
              작지만 최고 품질 수준을 자랑하는 고객이 인정하는 회사로 거듭나기
              위한 끊임없는 노력을 경주하고 있습니다
            </p>
          </div>
          <WinnerImage />
          <PartnershipImage />
        </section>
        <section className="section2">
          <EngineerImage />
          <TruckImage />
          <TimeImage />
        </section>
        <section className="section3">
          <p>공정 동영상</p>
        </section>
        <footer>
          <div className="contactForm-container">
            <h2>Contact Us</h2>
            <ContactForm />
          </div>
          <ContactUsImage />
        </footer>
      </main>
    </div>
  );
}

export default Home;
