import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import { ReactComponent as Logo } from "./icons/airbnb.svg";

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
          <Logo />
          <Link to="/company-introduction">
            <NavItem icon="회사소개" />
          </Link>
          <Link to="/product-introduction">
            <NavItem icon="제품소개" />
          </Link>
          <Link to="/contact">
            <NavItem icon="Contact" />
          </Link>
          <NavItem icon="😃">
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
