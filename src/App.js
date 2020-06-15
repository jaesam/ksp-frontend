import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import Logo from "./icons/logo.png";
import KakaoMap from "./icons/map-placeholder.png";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";

import Home from "./components/pages/Home";
import SamplePage from "./components/pages/SamplePage";
import ContactUs from "./components/pages/ContactUs";

// create index.js to export as a directory for refactoring
import NavItem from "./components/navbar/NavItem";
import DropdownMenu from "./components/navbar/DropdownMenu";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <article>
        <Navbar>
          <Link to="/" className="logo-container">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex desktop-only">
            <Link to="/company-introduction">
              <NavItem icon="1" />
            </Link>
            <Link to="/product-introduction">
              <NavItem icon="2" />
            </Link>
            <Link to="/contact">
              <NavItem icon="3" />
            </Link>
          </div>
          <NavItem icon={<MenuIcon />} className="mobile-only">
            <DropdownMenu />
          </NavItem>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/company-introduction" component={SamplePage} />
          <Route path="/product-introduction" component={SamplePage} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
        <footer className="flex">
          <div className="col-6">
            <h1>찾아오시는 길</h1>
            <img src={KakaoMap} alt="map placeholder" />
          </div>
          <div className="col-6">
            <div className="flex">
              <span>이용약관</span>
              <span>개인 정보 처리 방침</span>
              <span>이메일 무단 수집 거부</span>
            </div>
          </div>
        </footer>
      </article>
    </Router>
  );
}

export default App;
