import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import { ReactComponent as Logo } from "./icons/airbnb.svg";
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
            <Logo />
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
      </article>
    </Router>
  );
}

export default App;
